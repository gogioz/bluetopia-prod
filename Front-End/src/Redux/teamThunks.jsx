import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeamData = createAsyncThunk(
  "teamData/fetchData",
  async () => {
    const team = await axios.get("https://services.bluetopia.org/team");
    return team.data.data;
  }
);
