import React from "react";

import SubTaskCheckbox from "./SubTaskCheckbox";

function SubtaskContainer({ subtasks }) {
  return (
    <ul className="space-y-2">
      {subtasks.map((sub) => (
        <li key={sub.title}>
          <SubTaskCheckbox subtask={sub} />
        </li>
      ))}
    </ul>
  );
}

export default SubtaskContainer;
