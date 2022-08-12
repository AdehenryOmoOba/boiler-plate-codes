import poolPackage from "pg";
import dotenv from "dotenv";
const { Pool } = poolPackage;

if (process.env.NODE_ENV !== "production") dotenv.config();

export const blogsPool = new Pool({
  user: "hgsmcqse",
  password: process.env.PSQL_DB_PASSWORD,
  database: "hgsmcqse",
  host: "manny.db.elephantsql.com",
  port: 5432,
});

export const studentsPool = new Pool({
  user: "adehenry",
  password: process.env.PSQL_LOCAL_DB_PASSWORD,
  database: "projects",
  host: "localhost",
  port: 5432,
});
