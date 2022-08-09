import { studentsPool as pool } from "../postgresDB.js";

export const getAllStudentsController = async (req, res, next) => {
  try {
    const { page } = req.query;
    const offset = !page || Number(page) === 1 ? 0 : Number(page) * 10 - 10;
    const { rows } = await pool.query(
      "SELECT * FROM students OFFSET $1 limit 10",
      [offset]
    );
    res.status(200).json({ page: Number(page) || 1, students: rows });
  } catch (error) {
    next(error);
  }
};
