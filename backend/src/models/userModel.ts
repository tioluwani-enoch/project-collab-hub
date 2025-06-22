import mongoose, { Document, Schema } from "mongoose";

// Step 1: Define a TypeScript interface for your User
export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
}

// Step 2: Define the schema
const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Step 3: Create and export the model with the interface
const User = mongoose.model<IUser>("User", userSchema);
export default User;
