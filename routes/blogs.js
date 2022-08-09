import express from "express";
import {
  getAllBlogsController,
  createBlogController,
} from "../controllers/blogs.js";
import { verifyToken } from "../verify.js";

export const router = express.Router();

router.get("/", getAllBlogsController);

router.post("/create-blog", verifyToken, createBlogController);
