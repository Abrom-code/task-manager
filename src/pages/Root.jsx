import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav/Nav";

function RootLayout() {
  return (
    <div>
      <Nav />
      <main className=" mt-20">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
