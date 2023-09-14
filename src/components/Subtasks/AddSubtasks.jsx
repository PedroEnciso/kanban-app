import React from "react";

import Input from "../UI/Forms/Input";
import BodyM from "../UI/Typography/BodyM";

const subtaskPlaceholder = [
  { title: "e.g. Make coffee", isComplete: false },
  { title: "e.g. Drink coffee and smile", isComplete: false },
];

function AddSubtasks({ subtasks = subtaskPlaceholder }) {
  // placeholder will store a boolean; true if the subtask array being used is the placeholder array
  // use this to determine if the title should be displayed as placeholder text
  const placeholder =
    JSON.stringify(subtasks) === JSON.stringify(subtaskPlaceholder);
  return (
    <fieldset className="space-y-2">
      <legend>
        <BodyM>Subtasks</BodyM>
      </legend>
      {subtasks.map((sub, index) => (
        <div key={`s${index}`} className="flex gap-4">
          {placeholder && (
            <Input name={`s${index}`} type="text" placeholder={sub.title} />
          )}
          {!placeholder && (
            <Input name={`s${index}`} type="text" value={sub.title} />
          )}
          <button className="shrink-0">
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#828FA3" fillRule="evenodd">
                <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
              </g>
            </svg>
          </button>
        </div>
      ))}
    </fieldset>
  );
}

export default AddSubtasks;
