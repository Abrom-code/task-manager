import React from "react";
import CreateTask from "../components/Dashboard/CreateTask";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function EditPage() {
  const { taskId } = useParams();
  const task = useSelector((state) => state.task.tasks);
  const currentTask = task?.find((task) => task.id === Number(taskId));

  return (
    <div className=" p-4 shadow rounded-sm bg-gray-100 md:w-[80%] lg:w-[70%] dark:bg-[#323232d8]">
      <CreateTask currentTask={currentTask} />
    </div>
  );
}

export default EditPage;
