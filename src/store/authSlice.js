import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      state.currentUser = user;
    },
    removeUser(state, action) {
      state.currentUser = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

export const signUpAction = async ({ request }) => {
  const data = await request.formData();

  const email = data.get("email");
  const password = data.get("password");
  const confirm = data.get("confirm");

  if (!email || !password || !confirm)
    return { error: "Please fill Each Fields!" };

  if (password.trim().length < 4)
    return { error: "The password must be atleast 8 character!" };

  if (password !== confirm)
    return { error: "Please confirm the correct password!" };

  try {
    const user = (await createUserWithEmailAndPassword(auth, email, password))
      .user;

    const userData = {
      uid: user.uid,
      email: user.email,
      accessToken: user.accessToken,
    };
    return { userData };
  } catch (error) {
    return { error: error.code };
  }
};
