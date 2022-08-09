import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { router as homePageRouter } from "./routes/home.js";
import { router as authRouter } from "./routes/auth.js";
import { router as usersRouter } from "./routes/users.js";
import { router as pageNotFoundRouter } from "./routes/pageNotFound.js";
import cookieParser from "cookie-parser";
import { router as blogsRouter } from "./routes/blogs.js";

if (process.env.NODE_ENV !== "production") dotenv.config();

const databaseURI = process.env.DB_URI;
const PORT = 4100;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(homePageRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/blogs", blogsRouter);
app.use("/*", pageNotFoundRouter);
// Error handler middleware
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const errorMsg = error.message || "Something went wrong!";
  return res.status(status).json({ status, errorMsg });
});

mongoose.connect(
  databaseURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`Database connection error: ${err.message}`);
    } else {
      console.log("Connection to database successful");
      app.listen(process.env.PORT || PORT, () => {
        console.log(`Server running on port ${PORT}...`);
      });
    }
  }
);
