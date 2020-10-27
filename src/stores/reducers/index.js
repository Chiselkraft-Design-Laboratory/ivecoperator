import { combineReducers } from "redux";

import LoginReducer from "./LoginReducer";
import dashboardReducers from './dashboardReducers'

const rootReducer = combineReducers({
  login: LoginReducer,
  dashBoard: dashboardReducers
});

export default rootReducer;
