// store.js

import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import partnersSlice from "./partnersSlice";
import teamSlice from "./teamSlice";

const store = configureStore({
  reducer: {
    apiData: dataSlice,
    partnersData: partnersSlice,
    teamData: teamSlice,
  },
});

export default store;
