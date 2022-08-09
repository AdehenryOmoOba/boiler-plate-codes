import express from "express";
import {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
} from "../controllers/blogs.js";
import { verifyToken } from "../verify.js";

export const router = express.Router();

router.get("/", getAllBlogsController);

router.post("/create-blog", verifyToken, createBlogController);
router.put("/update-blog/:id", verifyToken, updateBlogController);
router.delete("/delete-blog/:id", verifyToken, deleteBlogController);
