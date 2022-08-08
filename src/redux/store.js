import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./slices/cakeSlice";
import waterSlice from "./slices/waterSlice";

const store = configureStore({
  reducer: {
    cakeSlice,
    waterSlice,
  },
});

export default store;
