import express from "express";
import { getAllStudentsController } from "../controllers/students.js";

export const router = express.Router();

router.get("/", getAllStudentsController);
