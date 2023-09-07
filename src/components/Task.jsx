import React from "react";

import HeadingM from "./Typography/HeadingM";
import BodyM from "./Typography/BodyM";

function Task({ task }) {
  let totalSubtasks = 0;
  let completedSubtasks = 0;

  task.subtasks.forEach((sub) => {
    ++totalSubtasks;
    if (sub.isCompleted) ++completedSubtasks;
  });

  return (
    <li className="w-[280px] bg-white px-4 py-6 rounded-lg drop-shadow-md space-y-2">
      <h3>
        <HeadingM>{task.title}</HeadingM>
      </h3>
      <BodyM>
        {completedSubtasks} of {totalSubtasks} subtasks
      </BodyM>
    </li>
  );
}

export default Task;
