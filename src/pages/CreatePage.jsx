import React from "react";
import CreateTask from "../components/Dashboard/CreateTask";

function CreatePage() {
  return (
    <div className=" p-4 shadow rounded-sm bg-gray-100 md:w-[80%] lg:w-[70%] dark:bg-[#323232d8]">
      <CreateTask />
    </div>
  );
}

export default CreatePage;
