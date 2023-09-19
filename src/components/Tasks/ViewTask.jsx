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

  console.log(columnList);
  const currentColumn = columnList.filter((col) => task.status === col.name);
  let currentStatus = currentColumn[0].id;

  const onClose = (status) => {
    if (status === currentStatus) {
      return;
    }
    boardCtx.updateTask(task, status);
  };

  useEffect(() => {
    let status;
    const sub = watch((data) => {
      status = data;
    });
    return () => {
      if (status) {
        onClose(status.status);
      }
      sub.unsubscribe();
    };
  }, [watch]);

  let taskDescription = task.description;
  if (!task.description) {
    taskDescription = "This task does not have a description yet.";
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }
  return (
    <div onClick={stopPropagation} className="flex flex-col gap-5">
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
        <SubtaskContainer subtasks={task.subtasks} />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
        <BodyM>Current Status</BodyM>
        <Select
          onStatusChange={onClose}
          name="status"
          register={register}
          defaultValue={currentStatus}
          optionList={columnList}
        />
      </form>
    </div>
  );
}

export default ViewTask;
