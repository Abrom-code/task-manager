import { configureStore } from "@reduxjs/toolkit";
import taskReduce from "./taskSlice";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: { task: taskReduce, ui: uiReducer, auth: authReducer },
});
