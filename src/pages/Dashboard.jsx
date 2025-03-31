import React from "react";
import DashNav from "../components/Dashboard/DashNav";
import { Outlet } from "react-router";

function Dashboard() {
  return (
    <div className=" flex gap-2 my-6">
      <DashNav />
      <div className=" mx-4 w-full  md:w-2.6/4 lg:w-3.6/5 rounded-sm ">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
