import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { useNavigate } from "react-router";

function Nav() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 right-0 left-0 z-30 dark:bg-gray-800 bg-gray-300 p-2 pl-8 pr-8 flex items-center justify-between">
      <div onClick={() => navigate("/")} className=" cursor-pointer">
        <h2 className=" text-blue-500 font-bold text-2xl">TASK MANAGER</h2>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Nav;
