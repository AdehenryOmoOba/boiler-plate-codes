import poolPackage from "pg";
import dotenv from "dotenv";
const { Pool } = poolPackage;

if (process.env.NODE_ENV !== "production") dotenv.config();

export const blogsPool = new Pool({
  user: "postgres",
  password: process.env.PSQL_DB_PASSWORD,
  database: "youtube_clone_db",
  host: "localhost",
  port: 5432,
});

export const studentsPool = new Pool({
  user: "postgres",
  password: process.env.PSQL_DB_PASSWORD,
  database: "phoebestar",
  host: "localhost",
  port: 5432,
});
