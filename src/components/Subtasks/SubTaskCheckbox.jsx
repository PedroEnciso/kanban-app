import { useState } from "react";

import BodyM from "../UI/Typography/BodyM";

function SubTaskCheckbox({ subtask }) {
  const [isChecked, setIsChecked] = useState(subtask.isCompleted);

  const handleOnChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="flex px-3 py-3 gap-3 rounded bg-lightGray dark:bg-veryDarkGray hover:bg-mainPurple/25 dark:hover:bg-mainPurple/25">
      <input
        type="checkbox"
        name={subtask.title}
        checked={isChecked}
        onChange={handleOnChange}
        className="appearance-none peer w-4 h-4 border border-mediumGray/25 rounded-sm bg-white dark:bg-darkGray focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-mainPurple checked:bg-mainPurple dark:checked:bg-mainPurple checked:border-0"
      />
      <label htmlFor={subtask.title} onClick={handleOnChange} className="grow">
        <BodyM
          extraClasses={isChecked && "line-through"}
          textColor={
            !isChecked ? "text-black dark:text-white" : "text-mediumGray"
          }
        >
          {subtask.title}
        </BodyM>
      </label>
      <svg
        className="absolute w-4 h-4 mt-1 ml-0.5 hidden peer-checked:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#FFF"
          strokeWidth="2"
          fill="none"
          d="m1.276 3.066 2.756 2.756 5-5"
        />
      </svg>
    </div>
  );
}

export default SubTaskCheckbox;
