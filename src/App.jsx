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
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
