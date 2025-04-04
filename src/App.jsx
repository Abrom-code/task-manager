import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import CreatePage from "./pages/CreatePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import StatusPage from "./pages/StatusPage";
import DisplayPage from "./pages/DisplayPage";
import UpdatePage from "./pages/UpdatePage";
import EditPage from "./pages/EditPage";

import {
  signUpAction,
  login as loginAction,
  authActions,
} from "./store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { protectiveLoader } from "./pages/protectiveLoader";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: protectiveLoader,
        children: [
          { index: true, element: <StatusPage /> },
          {
            path: "tasks",
            element: <DisplayPage />,
          },
          { path: "tasks/update/:taskId", element: <UpdatePage /> },
          { path: "tasks/edit/:taskId", element: <EditPage /> },
          { path: "newtask", element: <CreatePage /> },
        ],
      },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "signup", element: <SignupPage />, action: signUpAction },
    ],
  },
]);

export default function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userData = {
        email: user.email,
        name: user.displayName,
        id: user.uid,
      };
      dispatch(authActions.setUser(userData));
    } else {
      dispatch(authActions.removeUser());
    }
  });

  return <RouterProvider router={router} />;
}
