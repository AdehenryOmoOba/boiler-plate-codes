import express from "express";
import {
  getAllStudentsController,
  getSingleStudentController,
  updateSingleStudentController,
  deleteSingleStudentController,
  createStudentController,
} from "../controllers/students.js";

export const router = express.Router();

router.get("/", getAllStudentsController);
router.get("/:id", getSingleStudentController);
router.get("/edit/:id", getSingleStudentController);
router.post("/edit/:id", updateSingleStudentController);
router.post("/create", createStudentController);
router.delete("/delete/:id", deleteSingleStudentController);
