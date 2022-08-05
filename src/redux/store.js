import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./reducers/cakeReducer";
import emailReducer from "./reducers/databaseEmailReducer";
import usersReducer from "./reducers/usersReducer";
import waterReducer from "./reducers/waterReducer";

const thunk = require("redux-thunk").default;

const rootReducer = combineReducers({
  cakeReducer,
  waterReducer,
  usersReducer,
  emailReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
