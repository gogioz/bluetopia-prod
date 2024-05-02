import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "teamData",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload; // Update the state with the API data
    },
  },
});

export const { setData } = teamSlice.actions;

export default teamSlice.reducer;
