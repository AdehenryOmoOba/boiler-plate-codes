import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./slices/cakeSlice";
import databaseEmailSlice from "./slices/databaseEmailSlice";
import usersSlice from "./slices/usersSlice";
import waterSlice from "./slices/waterSlice";

const store = configureStore({
  reducer: {
    cakeSlice,
    waterSlice,
    usersSlice,
    databaseEmailSlice,
  },
});

export default store;
