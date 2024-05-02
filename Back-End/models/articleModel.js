import mongoose from "mongoose";

// Article Schema
const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  titleTrans: { type: String, required: true },
  subTitle: { type: String, required: true },
  subTitleTrans: { type: String, required: true },
  description: { type: String, required: true },
  descriptionTrans: { type: String, required: true },
  image: { type: String, required: true },
});

// make a model from the Schema
export const Article = mongoose.model("Article", articleSchema);
