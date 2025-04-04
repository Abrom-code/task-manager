import React from "react";
import Update from "../components/Dashboard/Update";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function UpdatePage() {
  const { taskId } = useParams();
  const task = useSelector((state) => state.task.tasks);
  const currentTask = task?.find((task) => task.id === Number(taskId));

  return (
    <div className=" p-4 shadow rounded-sm bg-gray-100 md:w-[80%] lg:w-[70%] dark:bg-gray-800">
      <Update currentTask={currentTask} />
    </div>
  );
}

export default UpdatePage;
