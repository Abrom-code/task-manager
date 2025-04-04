import { redirect } from "react-router";
import { auth } from "../firebase";

export const protectiveLoader = () => {
  const currentUser = auth.currentUser;

  if (currentUser === null) {
    return redirect("/login");
  }
};
