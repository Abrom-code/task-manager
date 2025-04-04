import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { redirect } from "react-router";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      console.log(user);
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

  if (password.trim().length < 6)
    return { error: "The password must be atleast 6 character!" };

  if (password !== confirm)
    return { error: "Please confirm the correct password!" };

  try {
    await createUserWithEmailAndPassword(auth, email, password);

    return redirect("/dashboard");
  } catch (error) {
    return { error: error.code };
  }
};

export const login = async ({ request }) => {
  const data = await request.formData();

  const email = data.get("email");
  const password = data.get("password");

  if (!email || !password) return { error: "Please fill Each Fields!" };

  if (password.trim().length < 6)
    return { error: "The password must be atleast6 character!" };

  try {
    await signInWithEmailAndPassword(auth, email, password);

    return redirect("/dashboard");
  } catch (error) {
    return { error: error.code };
  }
};

export const handleLogOut = async () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
      return redirect("/");
    })
    .catch((error) => {
      return { error: error.code };
    });
};
