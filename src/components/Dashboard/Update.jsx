import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router";
import formatteDate from "../../utils/formattedDate";
import CheckBox from "./CheckBox";

function Update({ currentTask }) {
  if (!currentTask) return <p>No task selected</p>;
  const navigate = useNavigate();
  const formattedDueDate = formatteDate(currentTask.dueDate);
  const subTasks = currentTask.subTasks;

  return (
    <div className=" px-3 flex flex-col gap-4  ">
      <div className=" flex justify-between">
        <IoArrowBackCircle
          size={25}
          className=" cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className=" font-semibold text-[1.3rem]">Update Task</h1>
      </div>
      <div>
        <p className=" font-bold">Title</p>
        <p className=" pl-6 font-semibold">{currentTask.title} </p>
      </div>
      <div>
        <p className=" font-bold">Description</p>
        <p className="pl-6 text-gray-600 w-full  dark:text-gray-400  p-1">
          {currentTask.description}
        </p>
      </div>
      <div className=" flex justify-between">
        <div className=" flex flex-col">
          <span className=" font-bold">Priority</span>
          <p>{currentTask.priority}</p>
        </div>
        <label>
          <p className=" font-bold">Due Date</p> <p>{formattedDueDate} </p>
        </label>
      </div>
      <p className=" font-bold">TODO Checklist</p>
      <div className=" flex flex-col gap-2 pl-6">
        {subTasks.map((subTask) => (
          <CheckBox
            key={subTask.id}
            taskId={currentTask.id}
            subTask={subTask}
          />
        ))}
      </div>
      <div className=" flex flex-col gap-2 items-center w-full"></div>
    </div>
  );
}

export default Update;
