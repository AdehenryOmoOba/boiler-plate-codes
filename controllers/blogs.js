import pool from "../postgresDB.js";

export const createBlogController = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO blogs (id, title , content, posted_at) VALUES (uuid_generate_v4(),$1,$2,NOW()) RETURNING *",
      [title, content]
    );
    res.status(200).json({ newBlog: rows });
  } catch (error) {
    next(error);
  }
};

export const getAllBlogsController = async (req, res, next) => {
  try {
    const { rows } = await pool.query("SELECT * FROM blogs");
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};
