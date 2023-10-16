import React from "react";

function TaskOptions({ onDelete, onEdit, type = "TASK" }) {
  let name = "Task";
  if (type === "BOARD") name = "Board";
  const editHandler = () => {
    onEdit();
  };

  const deleteHandler = () => {
    onDelete();
  };

  return (
    <div className="absolute top-full left-full translate-x-[-100%] z-50 w-[192px] flex flex-col bg-white dark:bg-veryDarkGray rounded-lg text-[13px]">
      <button
        className="w-full text-left py-4 px-4 text-mediumGray rounded-tl-lg rounded-tr-lg hover:bg-lightGray dark:hover:bg-darkGray transition-colors duration-200 "
        onClick={editHandler}
      >
        Edit {name}
      </button>
      <button
        className="w-full text-left py-4 px-4 text-red rounded-bl-lg rounded-br-lg hover:bg-red/10 transition-colors duration-200"
        onClick={deleteHandler}
      >
        Delete {name}
      </button>
    </div>
  );
}

export default TaskOptions;
