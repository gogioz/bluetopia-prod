import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSponsersData = createAsyncThunk(
  "partnersData/fetchData",
  async () => {
    const partners = await axios.get("https://services.bluetopia.org/sponsers");
    return partners.data.data;
  }
);
