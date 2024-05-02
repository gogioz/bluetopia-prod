import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSponsersData = createAsyncThunk(
  "partnersData/fetchData",
  async () => {
    const partners = await axios.get("http://localhost:5000/sponsers");
    return partners.data.data;
  }
);
