import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
  },
  reducers: {},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
