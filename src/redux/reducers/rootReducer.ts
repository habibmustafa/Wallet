import { combineReducers } from "redux";
import main from "./main";
import auth from "./auth";

export const rootReducer = combineReducers({
  main,
  auth,
});
