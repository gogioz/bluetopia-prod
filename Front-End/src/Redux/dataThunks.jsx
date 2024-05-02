import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiData = createAsyncThunk("apiData/fetchData", async () => {
  const articles = await axios.get("http://localhost:5000/articles");
  return articles.data.data;
});
