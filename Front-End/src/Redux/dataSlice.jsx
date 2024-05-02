import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "apiData",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload; // Update the state with the API data
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
