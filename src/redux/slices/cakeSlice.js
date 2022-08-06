import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cake",
  initialState: { numOfCakes: 15 },
  reducers: {
    buyCake: (state) => {
      state.numOfCakes--;
    },
    orderCake: (state) => {
      state.numOfCakes++;
    },
    orderCakeByAmount: (state, action) => {
      state.numOfCakes += Number(action.payload);
    },
  },
});

export default slice.reducer;
export const { buyCake, orderCake, orderCakeByAmount } = slice.actions;
