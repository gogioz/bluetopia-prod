import mongoose from "mongoose";

// Admin Schema
const sponserSchema = mongoose.Schema({
  logo: { type: String, required: true },
});

// make a model from the Schema
export const Sponser = mongoose.model("Sponser", sponserSchema);
