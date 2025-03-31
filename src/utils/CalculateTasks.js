import { useSelector } from "react-redux";

function CalculateTasks() {
  const taskList = useSelector((state) => state.task);
  const pendingTasks = taskList.tasks.filter(
    (task) => task.taskStatus === "Pending"
  ).length;
  const progressTasks = taskList.tasks.filter(
    (task) => task.taskStatus === "Progress"
  ).length;
  const completedTasks = taskList.tasks.filter(
    (task) => task.taskStatus === "Completed"
  ).length;
  const highPriority = taskList.tasks.filter(
    (task) => task.priority === "High"
  ).length;
  const mediumPriority = taskList.tasks.filter(
    (task) => task.priority === "Medium"
  ).length;
  const lowPriority = taskList.tasks.filter(
    (task) => task.priority === "Low"
  ).length;
  const allTasks = pendingTasks + progressTasks + completedTasks;
  return {
    pendingTasks,
    progressTasks,
    completedTasks,
    allTasks,
    highPriority,
    mediumPriority,
    lowPriority,
  };
}

export default CalculateTasks;
