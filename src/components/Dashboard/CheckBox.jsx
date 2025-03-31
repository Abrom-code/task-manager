import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/taskSlice";

function CheckBox({ subTask, taskId }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleAddToDone = (id) => {
    setChecked(true);
    dispatch(taskActions.addToDone({ taskId, subTaskId: id }));
  };
  const handleRemoveFromDone = (id) => {
    setChecked(false);
    dispatch(taskActions.removeFromDone({ taskId, subTaskId: id }));
  };
  return (
    <label className=" flex gap-4 items-center bg-gray-300 dark:bg-gray-600 pl-4 rounded">
      <Checkbox
        checked={subTask.completed}
        onChange={() =>
          checked
            ? handleRemoveFromDone(subTask.id)
            : handleAddToDone(subTask.id)
        }
        type="checkbox"
      />
      <span> {subTask.value}</span>
    </label>
  );
}

export default CheckBox;
