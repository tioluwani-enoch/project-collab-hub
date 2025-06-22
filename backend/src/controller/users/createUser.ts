import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../../models/userModel";

// Hashing function for user's password
async function hashPassword(password: string) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Create a new user
export async function createUser(req: Request, res: Response): Promise<void> {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    res.status(400).json({ message: "Please fill out all fields." });
    return;
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: "Username already exists." });
      return;
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ message: "Email already in use." });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Strip password before sending response
    const { password: _, ...userWithoutPassword } = newUser.toObject();

    res.status(201).json({
      message: "User created successfully.",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
}
