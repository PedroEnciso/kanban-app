import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";

import ellipses from "../../assets/icon-vertical-ellipsis.svg";
import HeadingL from "../UI/Typography/HeadingL";
import BodyL from "../UI/Typography/BodyL";
import BodyM from "../UI/Typography/BodyM";
import SubtaskContainer from "../Subtasks/SubtaskContainer";
import Select from "../UI/Select";
import BoardContext from "../../store/board-context";

function ViewTask({ task, completedSubtasks, totalSubtasks, columnList }) {
  const boardCtx = useContext(BoardContext);
  const { register, watch } = useForm();

  const currentColumn = columnList.filter((col) => task.status === col.name);
  let currentStatus = currentColumn[0].id;

  const onClose = (newStatus = null, updatedSubtasks = []) => {
    boardCtx.updateTask(task, newStatus, updatedSubtasks);
  };

  useEffect(() => {
    let status;
    const sub = watch((data) => {
      status = data;
    });
    return () => {
      if (status) {
        let hasStatusChanged = status.status !== currentStatus;
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

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      <div className="flex gap-4 items-center justify-between">
        <h2 className="">
          <HeadingL>{task.title}</HeadingL>
        </h2>
        <button className="w-fit shrink-0">
          <img
            src={ellipses}
            alt=""
            className="w-[4px] h-[16px] sm:w-auto sm:h-auto"
          />
        </button>
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
          defaultValue={currentStatus}
          optionList={columnList}
        />
      </div>
    </form>
  );
}

export default ViewTask;
