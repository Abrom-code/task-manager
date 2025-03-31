import React, { useState } from "react";
import TaskBox from "./TaskBox";
import CalculateTasks from "../../utils/CalculateTasks";
import { useSelector } from "react-redux";

function DisplayTasks() {
  const [active, setActive] = useState("all");
  const taskList = useSelector((state) => state.task);
  const { pendingTasks, progressTasks, completedTasks, allTasks } =
    CalculateTasks();

  let filteredTasks;

  const handleFilterChange = (event) => {
    setActive(event.target.value);
  };
  if (active === "all") {
    filteredTasks = taskList.tasks;
  } else {
    filteredTasks = taskList.tasks.filter((task) => task.taskStatus === active);
  }

  // if (taskList.tasks.length === 0) {
  //   return <p>There is no any task!</p>;
  // }

  return (
    <div>
      <div className=" flex justify-between">
        <p className=" font-bold  text-2xl">My Tasks</p>
        <div className=" block md:hidden">
          <select
            value={active}
            onChange={handleFilterChange}
            className="font-bold outline-0 border-b-2 border-blue-400"
          >
            <option className=" font-semibold dark:text-gray-600" value={"all"}>
              ALL
            </option>
            <option
              className=" font-semibold dark:text-gray-600"
              value={"Pending"}
            >
              PENDING
            </option>
            <option
              className=" font-semibold dark:text-gray-600"
              value={"Progress"}
            >
              PROGRESS
            </option>
            <option
              className=" font-semibold dark:text-gray-600"
              value={"Completed"}
            >
              COMPLETED{" "}
            </option>
          </select>
        </div>
        <div className="hidden md:flex gap-6  lg:mr-20 font-bold">
          <div
            onClick={() => setActive("all")}
            className=" flex flex-col items-center cursor-pointer"
          >
            <p className={`  ${active === "all" && "text-blue-500"}`}>
              All<span>({allTasks})</span>
            </p>
            {active === "all" && (
              <hr className="border-t-4 w-[110%] border-blue-500 mt-1 rounded" />
            )}
          </div>
          <div
            onClick={() => setActive("Pending")}
            className=" flex flex-col items-center cursor-pointer"
          >
            {" "}
            <p className={`  ${active === "Pending" && "text-blue-500"}`}>
              Pending<span>({pendingTasks})</span>
            </p>
            {active === "Pending" && (
              <hr className="border-t-4 w-[110%] border-blue-500 mt-1 rounded" />
            )}
          </div>
          <div
            onClick={() => setActive("Progress")}
            className=" flex flex-col items-center cursor-pointer"
          >
            <p className={`  ${active === "Progress" && "text-blue-500"}`}>
              Progress<span>({progressTasks})</span>
            </p>
            {active === "Progress" && (
              <hr className="border-t-4 w-[110%] border-blue-500 mt-1 rounded" />
            )}
          </div>
          <div
            onClick={() => setActive("Completed")}
            className=" flex flex-col cursor-pointer items-center"
          >
            <p className={`${active === "Completed" && "text-blue-500"}`}>
              Completed<span>({completedTasks})</span>
            </p>
            {active === "Completed" && (
              <hr className="border-t-4 w-[110%] border-blue-500 mt-1 rounded" />
            )}
          </div>
        </div>
      </div>
      <div className=" grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredTasks &&
          filteredTasks.map((task) => <TaskBox key={task.id} task={task} />)}
      </div>
    </div>
  );
}

export default DisplayTasks;
