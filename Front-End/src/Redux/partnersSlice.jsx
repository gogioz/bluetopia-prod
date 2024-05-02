import { createSlice } from "@reduxjs/toolkit";

const partnerSlice = createSlice({
  name: "partnersData",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload; // Update the state with the API data
    },
  },
});

export const { setData } = partnerSlice.actions;

export default partnerSlice.reducer;
