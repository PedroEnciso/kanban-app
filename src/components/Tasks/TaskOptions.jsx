import React from "react";

function TaskOptions({ onDeleteTask }) {
  const editTaskHandler = () => {
    console.log("show edit screen");
  };

  const deleteTaskHandler = () => {
    onDeleteTask();
  };

  return (
    <div className="absolute top-full left-full translate-x-[-100%] z-50 w-[182px] flex flex-col bg-white dark:bg-veryDarkGray rounded-lg text-[13px]">
      <button
        className="w-full text-left py-4 px-4 text-mediumGray rounded-tl-lg rounded-tr-lg hover:bg-lightGray dark:hover:bg-darkGray transition-colors duration-200 "
        onClick={editTaskHandler}
      >
        Edit Task
      </button>
      <button
        className="w-full text-left py-4 px-4 text-red rounded-bl-lg rounded-br-lg hover:bg-red/10 transition-colors duration-200"
        onClick={deleteTaskHandler}
      >
        DeleteTask
      </button>
    </div>
  );
}

export default TaskOptions;
