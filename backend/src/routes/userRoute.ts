import express from "express";
import { createUser } from "../controller/users/createUser";
import { loginUser } from "../controller/users/loginUser";
import { fetchUser } from "../controller/users/fetchUser";

export const userRouter = express.Router();

userRouter.post("/user/create", createUser);
userRouter.post("/user/login", loginUser);
userRouter.get("/user/profile/:username", fetchUser);
