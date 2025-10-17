import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import ratelimiter from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import cors from "cors";
import hpp from "hpp";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Global rate limiting

const limiter = ratelimiter({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: "Too many requests from this IP, please try again in an hour",
});

// Security middleware

app.use("/api", limiter);
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

// logging middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser middleware

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// API ROUTES

// Global Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    status: "error",
    messsage: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// CORS Configuration

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "device-remember-token",
      "Access-Control-Allow-Origin",
      "Origin",
      "Accept",
    ],
  })
);

// It should be always at bottom
// 404 handler

app.use((req, res) => {
  res.status(404).json({
    status: "Error",
    message: "Route not found Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
