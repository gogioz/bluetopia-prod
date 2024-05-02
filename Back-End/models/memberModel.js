import mongoose from "mongoose";

// Article Schema
const teamMemberSchema = mongoose.Schema({
  name: { type: String, required: true },
  nameTrans: { type: String, required: false },
  title: { type: String, required: true },
  titleTrans: { type: String, required: false },
  about1: { type: String, required: true },
  about1Trans: { type: String, required: false },
  about2: { type: String, required: false },
  about2Trans: { type: String, required: false },
  link: { type: String, required: false },
  images: [String],
});

// make a model from the Schema
export const Member = mongoose.model("Member", teamMemberSchema);
