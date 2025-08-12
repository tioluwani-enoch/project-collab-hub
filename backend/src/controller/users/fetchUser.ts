import express from "express";
import { Request, Response } from "express";
import User from "../../models/userModel";

const router = express.Router();

export async function fetchUser(req: Request, res: Response): Promise<void> {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username: username }).select(
      "-password" // exclude password
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default router;
