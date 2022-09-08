import { configureStore } from "@reduxjs/toolkit";
import DeptReducer from "./DeptReducer";

const reducer = {
  dept: DeptReducer
};
const store = configureStore({
  reducer
});

export default store;
