import { useState, useEffect, useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import ellipses from "../../assets/icon-vertical-ellipsis.svg";
import HeadingL from "../UI/Typography/HeadingL";
import BodyL from "../UI/Typography/BodyL";
import StatusSelector from "../UI/Forms/StatusSelector";
import CheckboxDisplay from "../UI/Forms/CheckboxDisplay";
import TaskOptions from "./TaskOptions";
import BoardContext from "../../store/board-context";

function ViewTask({
  task,
  completedSubtasks,
  totalSubtasks,
  showDeleteTask,
  showEditTask,
}) {
  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const { updateTask, displayColumns } = useContext(BoardContext);

  const statusIndex = displayColumns.findIndex(
    (col) => col.name === task.status
  );
  const defaultStatus = displayColumns[statusIndex];

  const { register, watch, control } = useForm({
    defaultValues: {
      status: defaultStatus,
      subtasks: task.subtasks,
    },
  });

  const { fields } = useFieldArray({
    name: "subtasks",
    control,
  });

  const selectedStatus = watch("status");

  let updatedSubtasks = [...task.subtasks];
  let updatedStatus = defaultStatus;
  useEffect(() => {
    const sub = watch((data) => {
      updatedSubtasks = data.subtasks;
      updatedStatus = data.status;
    });

    return () => {
      let isUpdated = false;
      const updatedTask = { ...task };
      if (updatedStatus.id !== defaultStatus.id) {
        // status has changed
        updatedTask.status = updatedStatus.name;
        isUpdated = true;
      }
      const updatedSubtaskArray = task.subtasks.filter(
        (sub, index) => sub.isCompleted !== updatedSubtasks[index].isCompleted
      );
      if (updatedSubtaskArray.length > 0) {
        // a subtask has been changed
        updatedTask.subtasks = updatedSubtasks;
        isUpdated = true;
      }
      if (isUpdated) {
        const newStatus =
          updatedStatus.id !== defaultStatus.id ? updatedStatus.id : null;
        updateTask(updatedTask, newStatus, defaultStatus.name);
      }
      sub.unsubscribe();
    };
  }, []);

  let taskDescription = task.description;
  if (!task.description) {
    taskDescription = "This task does not have a description yet.";
  }

  const handleToggleOptions = () => {
    setIsShowingOptions((prev) => !prev);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      <div className="relative flex gap-4 items-center justify-between">
        <h2 className="">
          <HeadingL>{task.title}</HeadingL>
        </h2>
        <button onClick={handleToggleOptions} className="w-fit shrink-0">
          <img
            src={ellipses}
            alt=""
            className="w-[4px] h-[16px] sm:w-auto sm:h-auto"
          />
        </button>
        {isShowingOptions && (
          <TaskOptions
            onDeleteTask={showDeleteTask}
            onEditTask={showEditTask}
          />
        )}
      </div>
      <BodyL>{taskDescription}</BodyL>
      <CheckboxDisplay
        title={`Subtasks ${completedSubtasks} of ${totalSubtasks}`}
        fields={fields}
        register={register}
      />
      <StatusSelector
        title="Status"
        control={control}
        selectedStatus={selectedStatus}
        displayColumns={displayColumns}
      />
    </form>
  );
}

export default ViewTask;
