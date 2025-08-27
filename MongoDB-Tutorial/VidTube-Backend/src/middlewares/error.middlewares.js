import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? 400 : 500;

    const message = error.message || "Something went wrong";
    
    // Handle mongoose validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map(err => err.message);
      error = new ApiError(statusCode, "Validation Error", errors, err.stack);
    }
    // Handle mongoose duplicate key errors
    else if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const message = `${field} already exists`;
      error = new ApiError(409, message, [message], err.stack);
    }
    // Handle other mongoose errors
    else if (error instanceof mongoose.Error) {
      error = new ApiError(statusCode, message, [message], err.stack);
    }
    // Handle multer errors
    else if (error.code === 'LIMIT_FILE_SIZE') {
      error = new ApiError(400, "File too large", ["File size exceeds limit"], err.stack);
    }
    else if (error.code === 'LIMIT_FILE_COUNT') {
      error = new ApiError(400, "Too many files", ["Too many files uploaded"], err.stack);
    }
    else if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      error = new ApiError(400, "Unexpected file field", ["Unexpected file field"], err.stack);
    }
    else {
      error = new ApiError(statusCode, message, [message], err.stack);
    }
  }

  const response = {
    statusCode: error.statusCode,
    data: error.data,
    success: error.success,
    message: error.message,
    errors: error.errors,
    ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}),
  };

  return res.status(error.statusCode).json(response);
};

export { errorHandler };
