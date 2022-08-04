const BUY_WATER = "BUY_WATER";
const ORDER_WATER = "ORDER_WATER";
const ORDER_WATER_BY_QTY = "ORDER_WATER_BY_QTY";

export const buyWater = () => {
  return { type: BUY_WATER };
};

export const orderWater = () => {
  return { type: ORDER_WATER };
};

export const orderWaterByQty = (quantity) => {
  return { type: ORDER_WATER_BY_QTY, payload: quantity };
};

const initialState = { waterBottles: 25 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_WATER:
      return { ...state, waterBottles: state.waterBottles - 1 };
    case ORDER_WATER:
      return { ...state, waterBottles: state.waterBottles + 1 };
    case ORDER_WATER_BY_QTY:
      return {
        ...state,
        waterBottles: state.waterBottles + Number(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
