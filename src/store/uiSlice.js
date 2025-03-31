import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: "dashboard",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleActiveNav(state, action) {
      const text = action.payload;
      state.activeNav = text;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
