import React from "react";

import ellipses from "../assets/icon-vertical-ellipsis.svg";

function TaskFocusView({ task, completedSubtasks, totalSubtasks }) {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <h4 className="">{task.title}</h4>
        <button className="w-2 h-4">
          <img src={ellipses} alt="" className="w-full" />
        </button>
      </div>
      <p>{task.description}</p>
      <div>
        <p>Subtasks ({`${completedSubtasks} of ${totalSubtasks}`})</p>
        {task.subtasks.map((sub) => (
          <div>
            <p className={sub.isCompleted ? "line-through" : ""}>{sub.title}</p>
          </div>
        ))}
      </div>
      <div>
        <p>Current Status</p>
      </div>
    </div>
  );
}

export default TaskFocusView;
