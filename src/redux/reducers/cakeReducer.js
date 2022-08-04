const BUY_CAKE = "BUY_CAKE";
const ORDER_CAKE = "ORDER_CAKE";
const ORDER_CAKE_BY_QTY = "ORDER_CAKE_BY_QTY";

export const buyCake = () => {
  return { type: BUY_CAKE };
};

export const orderCake = () => {
  return { type: ORDER_CAKE };
};

export const orderCakeByQty = (quantity) => {
  return { type: ORDER_CAKE_BY_QTY, payload: quantity };
};

const initialState = { numOfCakes: 10 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case ORDER_CAKE:
      return { ...state, numOfCakes: state.numOfCakes + 1 };
    case ORDER_CAKE_BY_QTY:
      return {
        ...state,
        numOfCakes: state.numOfCakes + Number(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
