import { Router } from "express";
import UserController from "./user.controller";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/reg", userController.registration);
userRouter.post("/login", userController.login);

export default userRouter;
