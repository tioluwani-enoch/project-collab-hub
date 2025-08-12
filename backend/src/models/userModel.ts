import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: String,
  password: String, // hashed
  description: String,
  tags: [String],
  year: String,
  profilePicture: String,
  participationRate: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);
