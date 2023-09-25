import React from "react";

import SubTaskCheckbox from "./SubTaskCheckbox";

function SubtaskContainer({ subtasks, register }) {
  return (
    <ul className="space-y-2">
      {subtasks.map((sub) => (
        <li key={sub.id}>
          <SubTaskCheckbox subtask={sub} register={register} />
        </li>
      ))}
    </ul>
  );
}

export default SubtaskContainer;
