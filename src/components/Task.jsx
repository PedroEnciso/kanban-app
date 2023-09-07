import React from "react";

function Task({ task }) {
  let totalSubtasks = 0;
  let completedSubtasks = 0;

  task.subtasks.forEach((sub) => {
    ++totalSubtasks;
    if (sub.isCompleted) ++completedSubtasks;
  });

  return (
    <li className="w-[280px] bg-white">
      <h3>{task.title}</h3>
      <p>
        {completedSubtasks} of {totalSubtasks} subtasks
      </p>
    </li>
  );
}

export default Task;
