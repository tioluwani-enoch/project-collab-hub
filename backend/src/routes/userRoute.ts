import express from "express";
import { createUser } from "../controller/users/createUser";
import { loginUser } from "../controller/users/loginUser";

export const userRouter = express.Router();

userRouter.post("/user/create", createUser);
userRouter.post("/user/login", loginUser);
