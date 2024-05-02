import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeamData = createAsyncThunk(
  "teamData/fetchData",
  async () => {
    const team = await axios.get("http://localhost:5000/team");
    return team.data.data;
  }
);
