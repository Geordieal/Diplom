import addItem from "./cartReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  addItem,
});

export default rootReducers;
