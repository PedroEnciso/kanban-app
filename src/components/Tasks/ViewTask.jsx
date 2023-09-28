import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";

import ellipses from "../../assets/icon-vertical-ellipsis.svg";
import HeadingL from "../UI/Typography/HeadingL";
import BodyL from "../UI/Typography/BodyL";
import BodyM from "../UI/Typography/BodyM";
import SubtaskContainer from "../Subtasks/SubtaskContainer";
import Select from "../UI/Select";
import TaskOptions from "./TaskOptions";
import BoardContext from "../../store/board-context";

function ViewTask({
  task,
  completedSubtasks,
  totalSubtasks,
  statusId,
  showDeleteTask,
  showEditTask,
  columnList,
}) {
  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const boardCtx = useContext(BoardContext);
  const { register, watch } = useForm();

  const getStatusName = (id) => {
    const statusIndex = columnList.findIndex((col) => col.id === id);
    return columnList[statusIndex].name;
  };

  const onClose = (newStatus = null, updatedSubtasks = []) => {
    const updatedTask = { ...task };
    const oldStatusName = updatedTask.status;
    if (newStatus) {
      updatedTask.status = getStatusName(newStatus);
    }
    if (updatedSubtasks.length > 0) {
      updatedTask.subtasks = updatedSubtasks;
    }
    boardCtx.updateTask(updatedTask, newStatus, oldStatusName);
  };

  useEffect(() => {
    let status;
    const sub = watch((data) => {
      status = data;
    });
    return () => {
      if (status) {
        let hasStatusChanged = status.status !== statusId;
        let haveSubtasksChanged = false;
        let updatedSubtasks = task.subtasks.map((sub) => {
          if (sub.isCompleted !== status[sub.title]) {
            haveSubtasksChanged = true;
            return {
              ...sub,
              isCompleted: status[sub.title],
            };
          }
          return sub;
        });
        if (hasStatusChanged && !haveSubtasksChanged) {
          // task status has updated, but subtasks have not updated
          onClose(status.status);
        } else if (haveSubtasksChanged && !hasStatusChanged) {
          // subtasks have been updated, but status not updated
          onClose(null, updatedSubtasks);
        } else if (hasStatusChanged && haveSubtasksChanged) {
          onClose(status.status, updatedSubtasks);
        }
      }

      sub.unsubscribe();
    };
  }, [watch]);

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
      <div className="space-y-3">
        <BodyM>Subtasks ({`${completedSubtasks} of ${totalSubtasks}`})</BodyM>
        <SubtaskContainer subtasks={task.subtasks} register={register} />
      </div>
      <div className="space-y-2">
        <BodyM>Current Status</BodyM>
        <Select
          name="status"
          register={register}
          defaultValue={statusId}
          optionList={columnList}
        />
      </div>
    </form>
  );
}

export default ViewTask;
