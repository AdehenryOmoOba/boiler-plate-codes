import { studentsPool as pool } from "../postgresDB.js";

export const getAllStudentsController = async (req, res, next) => {
  try {
    const { rows: rowCount } = await pool.query(
      "SELECT COUNT(*) FROM students"
    );
    const { count } = rowCount[0];
    const pages = Math.ceil(Number(count) / 10);
    const { page } = req.query;
    const offset = !page || Number(page) === 1 ? 0 : Number(page) * 10 - 10;
    const { rows } = await pool.query(
      "SELECT id, first_name, last_name, email, gender, phone FROM students ORDER BY id OFFSET $1 limit 10",
      [offset]
    );
    res
      .status(200)
      .json({ page: `${Number(page || 1)} of ${pages}`, students: rows });
  } catch (error) {
    next(error);
  }
};

export const getSingleStudentController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT id, first_name, last_name, email, gender, phone FROM students WHERE id = $1",
      [id]
    );
    res.status(200).json({ rows });
  } catch (error) {
    next(error);
  }
};

export const updateSingleStudentController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, gender, phone } = req.body;
    const { rows } = await pool.query(
      "UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, phone = $5 WHERE id = $6 RETURNING *",
      [firstName, lastName, email, gender, phone, id]
    );
    console.log(rows[0]);
    res.status(200).json({ success: rows });
  } catch (error) {
    next(error);
  }
};

export const deleteSingleStudentController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { rows } = await pool.query(
      "DELETE FROM students WHERE id = $1 RETURNING *",
      [id]
    );
    console.log(rows[0]);
    res.status(200).json({ success: rows[0] });
  } catch (error) {
    next(error);
  }
};

export const createStudentController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, gender, phone } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO students (first_name,last_name,email,gender,phone) VALUES ($1,  $2,  $3,  $4, $5) RETURNING *",
      [firstName, lastName, email, gender, phone]
    );
    console.log(rows[0]);
    res.status(200).json({ success: rows });
  } catch (error) {
    next(error);
  }
};
