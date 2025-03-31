import { configureStore } from "@reduxjs/toolkit";
import taskReduce from "./taskSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: { task: taskReduce, ui: uiReducer },
});
