import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./reducers/cakeReducer";
import usersReducer from "./reducers/usersReducer";
import waterReducer from "./reducers/waterReducer";

const thunk = require("redux-thunk").default;

const rootReducer = combineReducers({
  cakeReducer,
  waterReducer,
  usersReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
