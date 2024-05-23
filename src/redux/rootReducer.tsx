import { combineReducers } from "@reduxjs/toolkit";
import userLogin from "./userLogin";

const rootReducer = combineReducers({
  user: userLogin,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
