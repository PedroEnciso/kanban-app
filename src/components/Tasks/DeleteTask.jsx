import React from "react";

import HeadingL from "../UI/Typography/HeadingL";
import BodyL from "../UI/Typography/BodyL";

function DeleteTask({ name, onCancel, onDelete, type = "TASK" }) {
  let titleType = "task";
  let question = `Are you sure you want to delete the '${name}' task and its subtasks? This action cannot be reversed.`;

  if (type === "BOARD") {
    titleType = "board";
    question = `Are you sure you want to delete the '${name}' board? This action will remove all columns and tasks and cannot be reversed.`;
  }

  return (
    <>
      <h2 className="pb-6">
        <HeadingL color="text-red">Delete this {titleType}?</HeadingL>
      </h2>
      <BodyL>{question} </BodyL>
      <div className="pt-6 flex gap-4">
        <button
          onClick={onDelete}
          className="text-white py-2 bg-red hover:bg-redHover grow rounded-full transition-colors duration-200"
        >
          Delete
        </button>
        <button
          onClick={onCancel}
          className="text-mainPurple bg-mainPurple/10 hover:bg-mainPurple/25 dark:bg-white dark:hover:white grow rounded-full transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default DeleteTask;
