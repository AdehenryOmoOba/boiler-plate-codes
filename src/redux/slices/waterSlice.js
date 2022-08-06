import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "water",
  initialState: { waterBottles: 20 },
  reducers: {
    buyWater: (state) => {
      state.waterBottles--;
    },
    orderWater: (state) => {
      state.waterBottles++;
    },
    orderWaterByQty: (state, action) => {
      state.waterBottles += Number(action.payload);
    },
  },
});

export default slice.reducer;
export const { buyWater, orderWater, orderWaterByQty } = slice.actions;
