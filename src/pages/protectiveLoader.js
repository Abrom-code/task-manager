import { redirect } from "react-router";
import { store } from "../store";

export const protectiveLoader = () => {
  const currentUser = store.getState().auth.currentUser;

  if (currentUser === null) {
    return redirect("/signup");
  }
};
