import { Button } from "@mui/material";
import Input from "../UI/Input";
import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

import { taskActions } from "../../store/taskSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { uiActions } from "../../store/uiSlice";

function CreateTask({ currentTask }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [subTasks, setSubTasks] = useState(
    (currentTask && currentTask.subTasks) || []
  );
  const [error, setError] = useState("");

  //add sub task
  const handleAddTask = (e) => {
    e.preventDefault();
    setError("");
    const value = inputValue.trim();
    if (!value) {
      setError("Please enter sub-task!");
      return;
    }
    setSubTasks((prev) => [
      ...prev,
      { value, id: prev.length, completed: false },
    ]);
    setInputValue("");
  };

  //Create a new task
  const handleCreateTask = (FormData) => {
    const title = FormData.get("title");
    const description = FormData.get("description");
    const priority = FormData.get("priority");
    const dueDate = FormData.get("dueDate");
    const taskStatus = "Pending";
    const completedTasks = [];
    const totalTasks = subTasks.length;
    const startDate = new Date().toLocaleDateString();

    setError("");

    if (
      title.trim() === 0 ||
      description.trim() === 0 ||
      !priority ||
      !dueDate ||
      !subTasks ||
      subTasks.length === 0 ||
      dueDate < startDate
    ) {
      setError("Please fill the correct data!");
    }

    if (!error) {
      const newTask = {
        id: Math.random(),
        title,
        description,
        subTasks,
        taskStatus,
        priority,
        startDate,
        dueDate,
        completedTasks,
        totalTasks,
      };
      dispatch(taskActions.addTask(newTask));

      setSubTasks([]);
      navigate("/dashboard/tasks");
      dispatch(uiActions.toggleActiveNav("dashboard"));
    }
  };

  //Edit Current task
  const handleEditTask = (FormData) => {
    let taskStatus;

    const title = FormData.get("title");
    const description = FormData.get("description");
    const priority = FormData.get("priority");
    const dueDate = FormData.get("dueDate");
    const completedTasks = subTasks.filter((task) => task.completed === true);
    const totalTasks = subTasks.length;
    const startDate = currentTask.startDate;

    if (totalTasks === completedTasks.length) {
      taskStatus = "Completed";
    } else if (completedTasks.length > 0) {
      taskStatus = "Progress";
    } else {
      taskStatus = "Pending";
    }

    setError("");

    if (
      title.trim() === 0 ||
      description.trim() === 0 ||
      !priority ||
      !dueDate ||
      !subTasks ||
      subTasks.length === 0
    ) {
      setError("Please fill each field!");
    }
    if (dueDate < startDate) {
      setError("Please enter valid date!");
    }

    const newTask = {
      id: currentTask.id,
      title,
      description,
      subTasks,
      taskStatus,
      priority,
      startDate,
      dueDate,
      completedTasks,
      totalTasks,
    };
    dispatch(taskActions.editTask(newTask));
    navigate("/dashboard/tasks");
    dispatch(uiActions.toggleActiveNav("dashboard"));
  };

  //delete subtask
  const handleDelete = (index) => {
    setSubTasks((prev) => {
      const newTasks = prev.filter((task) => task.id !== index);
      return newTasks;
    });
  };

  return (
    <form
      action={currentTask ? handleEditTask : handleCreateTask}
      className=" px-3 flex flex-col gap-4  "
    >
      <div className=" flex justify-between">
        <h1 className=" font-semibold text-[1.3rem]">Create Task</h1>
      </div>
      {error && <p className=" text-red-400">{error}</p>}
      <label>
        <p>Task Title </p>
        <Input
          defaultValue={currentTask && currentTask.title}
          className={" font-semibold text-[1.2rem]"}
          name="title"
          type="text"
          required
        />
      </label>
      <label>
        <p>Description</p>{" "}
        <textarea
          required
          defaultValue={currentTask && currentTask.description}
          className=" border outline-0 border-gray-400 rounded w-full  p-1"
          name="description"
        />
      </label>
      <div className=" flex justify-between">
        <div className=" flex flex-col">
          <span>Priority</span>
          <select
            required
            defaultValue={currentTask && currentTask.priority}
            name="priority"
            className=" border outline-0 "
          >
            <option value={"Medium"} className=" dark:text-gray-900">
              Medium
            </option>
            <option value={"High"} className=" dark:text-gray-900">
              High
            </option>
            <option value={"Low"} className=" dark:text-gray-900">
              Low
            </option>
          </select>
        </div>
        <label>
          <p>Due Date</p>{" "}
          <Input
            required
            defaultValue={currentTask && currentTask.dueDate}
            name="dueDate"
            className={"dark:text-gray-200"}
            type="date"
          />
        </label>
      </div>
      <p>TODO Checklist</p>
      <div className=" flex flex-col gap-2 items-center w-full">
        {subTasks &&
          subTasks.map((task) => (
            <p
              key={task.id}
              className=" flex items-center justify-between w-full py-0.5 px-8 rounded bg-gray-200 dark:bg-gray-700"
            >
              <span>{task.value}</span>{" "}
              <MdOutlineDeleteForever
                onClick={() => handleDelete(task.id)}
                size={25}
                className=" cursor-pointer"
                color=" #c33939"
              />
            </p>
          ))}
      </div>
      <div className=" flex gap-4 mb-6">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />{" "}
        <Button onClick={handleAddTask}>+ Add</Button>
      </div>

      <button className="bg-sky-700 text-blue-50 font-bold text-[1.2rem] p-1 rounded-sm cursor-pointer w-full ">
        {currentTask ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
}

export default CreateTask;
