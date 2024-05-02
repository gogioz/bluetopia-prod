import mongoose from "mongoose";

// Admin Schema
const loginSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// make a model from the Schema
export const Admin = mongoose.model("Admin", loginSchema);
