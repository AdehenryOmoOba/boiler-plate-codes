import { blogsPool as pool } from "../postgresDB.js";

export const createBlogController = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO blogs (id, title , content, posted_at) VALUES (uuid_generate_v4(),$1,$2,NOW()) RETURNING *",
      [title, content]
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

export const getAllBlogsController = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, title, content, posted_at FROM blogs ORDER BY posted_at DESC"
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

export const updateBlogController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { rows } = await pool.query(
      "UPDATE blogs SET title = $1 WHERE id = $2 RETURNING *",
      [title, id]
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

export const deleteBlogController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "DELETE FROM blogs WHERE id = $1 RETURNING *",
      [id]
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};
