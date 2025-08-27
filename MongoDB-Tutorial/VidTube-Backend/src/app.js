import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Common middlewares
app.use((req, res, next) => {
  console.log("Incoming Content-Type:", req.headers["content-type"]);
  next();
});
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routers

import router from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middlewares.js";

// routes

app.use("/api/v1/healthcheck", router);
app.use("/api/v1/users", userRouter);
app.use(errorHandler);

export { app };
