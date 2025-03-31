import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      const newTask = action.payload;
      const newTasks = [newTask, ...state.tasks];
      state.tasks = newTasks;
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      const newTask = state.tasks.filter((task) => task.id !== taskId);
      state.tasks = newTask;
    },
    editTask(state, action) {
      const newTask = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
    },
    addToDone(state, action) {
      const { taskId, subTaskId } = action.payload;
      const currentTask = state.tasks.find((task) => task.id === taskId);
      if (currentTask && currentTask.subTasks) {
        const subTask = currentTask.subTasks.find(
          (sub) => sub.id === subTaskId
        );

        if (subTask) {
          subTask.completed = true;
          currentTask.completedTasks = Object.values(
            currentTask.subTasks
          ).filter((sub) => sub.completed === true);
        }
        if (currentTask.completedTasks.length > 0) {
          currentTask.taskStatus = "Progress";
        }
        if (currentTask.subTasks.length === currentTask.completedTasks.length) {
          currentTask.taskStatus = "Completed";
        }
      }
    },
    removeFromDone(state, action) {
      const { taskId, subTaskId } = action.payload;
      const currentTask = state.tasks.find((task) => task.id === taskId);
      if (currentTask && currentTask.subTasks) {
        const subTask = currentTask.subTasks.find(
          (sub) => sub.id === subTaskId
        );

        if (subTask) {
          subTask.completed = false;
          currentTask.completedTasks = Object.values(
            currentTask.subTasks
          ).filter((sub) => sub.completed === true);
        }
        if (currentTask.completedTasks.length > 0) {
          currentTask.taskStatus = "Progress";
        }
        if (currentTask.subTasks.length === currentTask.completedTasks.length) {
          currentTask.taskStatus = "Completed";
        }
      }
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice.reducer;
