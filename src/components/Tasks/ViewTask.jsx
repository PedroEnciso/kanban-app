import React from "react";

import ellipses from "../../assets/icon-vertical-ellipsis.svg";
import HeadingL from "../UI/Typography/HeadingL";
import BodyL from "../UI/Typography/BodyL";
import BodyM from "../UI/Typography/BodyM";
import SubtaskContainer from "../Subtasks/SubtaskContainer";
import Select from "../UI/Select";

function ViewTask({ task, completedSubtasks, totalSubtasks, columnList }) {
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
        <h1 className="">
          <HeadingL>{task.title}</HeadingL>
        </h1>
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
      <div className="space-y-2 relative">
        <BodyM>Current Status</BodyM>
        <Select defaultValue={task.status} optionList={columnList} />
      </div>
    </div>
  );
}

export default ViewTask;
