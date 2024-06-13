import { Router } from "express";
import * as auth from "./users.controller.js";
import { checkEmailExist } from "../../middleware/checkEmailExists.js";

const userRouter = Router();
userRouter.post("/signUp", checkEmailExist, auth.singUp);
userRouter.post("/signIn", auth.singIn);
export { userRouter };
