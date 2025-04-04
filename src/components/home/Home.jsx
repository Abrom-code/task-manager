import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router";

function Home() {
  return (
    <section className="relative w-full h-screen dark:bg-gradient-to-br dark:from-gray-900  to-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-gray-800 dark:text-gray-300 text-4xl md:text-6xl font-bold leading-tight">
          Organize your work and life, finally! <br />
          <span className="text-blue-500">TASK MANAGER</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300">
          Simplify life for both you and your team with the world’s #1 task
          manager and to-do list app.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link to={"/signup"}>
            <Button size="lg" className="text-base">
              Get Started
            </Button>
          </Link>
          <Link to={"/dashboard"}>
            {" "}
            <Button size="lg" className="text-base">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
