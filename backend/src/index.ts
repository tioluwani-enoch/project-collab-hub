import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/userRoute";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/v1/", userRouter);

const PORT = process.env.PORT;
const blogDB = process.env.USER_DB_URI;

mongoose
  .connect(blogDB!)
  .then(() => console.log("Connected to userDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
