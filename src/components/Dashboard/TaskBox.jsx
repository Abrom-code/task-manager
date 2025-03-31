import { LinearProgress } from "@mui/material";
import React, { useMemo } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import formatteDate from "../../utils/formattedDate";
import { useNavigate } from "react-router";
import { taskActions } from "../../store/taskSlice";
import { useDispatch } from "react-redux";

function TaskBox({ task }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //delete task
  const handleDelete = () => {
    const res = confirm("Are you sure?");
    if (res) {
      dispatch(taskActions.deleteTask(task.id));
    }
  };

  const statusColorMap = {
    Pending: "#b608b6",
    Progress: "#4D96FF",
    Completed: "#42C87B",
  };

  //navigate dynamically
  const handleShowDetail = () => {
    navigate(`/dashboard/tasks/update/${task.id}`);
  };
  const handleEditTask = () => {
    navigate(`/dashboard/tasks/edit/${task.id}`);
  };

  //formatted start date and due date
  const formattedStartDate = formatteDate(task.startDate);
  const formattedDueDate = formatteDate(task.dueDate);

  const priorityColorMap = {
    High: "red",
    Medium: "amber",
    Low: "green",
  };
  const progressValue = useMemo(
    () => (task.completedTasks.length / task.totalTasks) * 100,
    [task.completedTasks.length, task.totalTasks]
  );

  const priorityColor = priorityColorMap[task.priority];
  const statusColor = statusColorMap[task.taskStatus] || "gray";
  return (
    <div className=" relative flex  flex-col  gap-2 shadow p-4 rounded-sm w-64 bg-gray-100  dark:bg-[#323232d8]">
      <div>
        <span
          className={`border border-gray-300 px-3 py-1 rounded-sm font-bold`}
          style={{ backgroundColor: `${statusColor}20`, color: statusColor }}
        >
          {task.taskStatus}
        </span>

        <span
          className={`ml-4 border-1 bg-${priorityColor}-100 px-3 py-1 rounded-sm text-${priorityColor}-400 font-bold  border-gray-300`}
        >
          {task.priority}
        </span>
      </div>
      <div className=" absolute z-10  top-3 right-2 flex flex-col gap-2">
        <BiEdit
          onClick={handleEditTask}
          size={24}
          className=" active:scale-[1.2] duration-150 cursor-pointer text-cyan-500"
        />
        <MdDelete
          onClick={handleDelete}
          size={24}
          className=" cursor-pointer active:scale-[1.2] duration-150"
          color="#c01414"
        />
      </div>
      <div onClick={handleShowDetail} className=" cursor-pointer">
        <p className=" font-semibold mt-4 text-[1.2rem] font-serif w-full overflow-hidden">
          {task.title}
        </p>
        <p className="min-h-12 text-gray-500 dark:text-gray-300 pl-4">
          {task.description.slice(0, 50)}
        </p>
        <p className=" font-semibold">
          Task Done :{" "}
          <span>
            {task.completedTasks.length}/{task.totalTasks}
          </span>
        </p>

        <LinearProgress
          variant="determinate"
          value={progressValue}
          className="my-4 transition duration-800 -z-20"
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: statusColor,
            },
            height: ".6rem",
            borderRadius: "10px",
            background: task.taskStatus === "Pending" ? "plum" : "auto",
          }}
        />

        <div className=" flex justify-between">
          <div>
            <p className=" font-semibold">Start date</p>
            <p className=" dark:text-gray-300 pl-2">{formattedStartDate}</p>
          </div>
          <div>
            <p className=" font-semibold">Due Date</p>
            <p className=" dark:text-gray-300 pr-4">{formattedDueDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskBox;
