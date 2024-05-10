import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiData = createAsyncThunk("apiData/fetchData", async () => {
  const articles = await axios.get("https://services.bluetopia.org/articles");
  return articles.data.data;
});
