import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxLength: [20, "Name can't exceed 20 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    maxLength: [50, "Email can't exceed 50 characters"],
    match: [
      "/^[a-zA-Z0-9-._]+@((w-]+.)+w-]{2,4})$/",
      "Plz provide the valid email",
    ],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be at least 8 characters"],
    select: false,
  },

  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    message: "Plz provide the valid role",
  },
});

export const user = mongoose.model("User", userSchema);
