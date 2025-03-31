import React from "react";
import { Link } from "react-router";

function HomePage() {
  return (
    <div className=" flex justify-center flex-col">
      <h2 className=" text-center">HomePage</h2>
      <Link to={"/dashboard"}>
        {" "}
        <button className=" bg-blue-500 p-2 rounded "> Dashboard</button>
      </Link>
    </div>
  );
}

export default HomePage;
