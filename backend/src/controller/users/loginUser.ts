import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../../models/userModel";

// Check if password matches hashed password
async function comparePassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function loginUser(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Please fill out all fields." });
    return;
  }

  try {
    // Find by either username or email
    const existingUser = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!existingUser) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const isMatch = await comparePassword(password, existingUser.password);

    if (!isMatch) {
      res.status(401).json({ message: "Invalid credentials." });
      return;
    }

    // Exclude password before sending user data
    const { password: _, ...userData } = existingUser.toObject();

    res.status(200).json({ message: "Login successful", user: userData });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
}
