import { Router } from "express";
import { addPost, getAllPosts } from "./posts.controllers.js";

const postsRouter = Router();

postsRouter.post("/", addPost);
postsRouter.get("/", getAllPosts);
export default postsRouter;
