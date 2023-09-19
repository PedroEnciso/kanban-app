import { useEffect, useState, useReducer } from "react";

import BoardContext from "./board-context";
import data from "../data";

const DUMMY_STATE = {
  boards: data.boards,
  displayBoardIndex: 0,
};

const EMPTY_DATA = {
  boards: [],
  displayBoardIndex: 0,
};

const boardDataReducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    console.log(`Adding task to col ${action.columnId}`, action.task);
    const updatedBoard = [...state.boards];
    let currentBoardColumns = updatedBoard[state.displayBoardIndex].columns;
    let columnIndex = currentBoardColumns.findIndex(
      (col) => col.id === action.columnId
    );
    currentBoardColumns[columnIndex].tasks.push(action.task);
    console.log(updatedBoard);
    return { boards: updatedBoard, displayBoardIndex: state.displayBoardIndex };
  }

  if (action.type === "UPDATE_TASK") {
    console.log(`Updating task ${action.task.title} to ${action.columnId}`);
    // get the old column that contained action.task
    const previousColumnIndex = state.boards[
      state.displayBoardIndex
    ].columns.findIndex((col) => col.name === action.task.status);
    const previousColumn =
      state.boards[state.displayBoardIndex].columns[previousColumnIndex];
    console.log(previousColumn);

    if (previousColumn.id === action.columnId) {
      // update the task with the new info
      console.log("status has not changed");
    } else {
      // delete task in the old column and add it to the new column
      console.log("status has changed");
      const updatedBoards = [...state.boards];
      // remove task in old column
      let columnWithDeletedTask =
        updatedBoards[state.displayBoardIndex].columns[previousColumnIndex];
      let deletedTaskList = columnWithDeletedTask.tasks.filter(
        (task) => task.id !== action.task.id
      );
      // update boards with updated column
      updatedBoards[state.displayBoardIndex].columns[
        previousColumnIndex
      ].tasks = deletedTaskList;
      // add task to its new column
      const columnWithAddedTaskIndex = updatedBoards[
        state.displayBoardIndex
      ].columns.findIndex((col) => col.id === action.columnId);
      const columnWithAddedTask =
        updatedBoards[state.displayBoardIndex].columns[
          columnWithAddedTaskIndex
        ];
      action.task.status = columnWithAddedTask.name;
      columnWithAddedTask.tasks.push(action.task);

      return {
        boards: updatedBoards,
        displayBoardIndex: state.displayBoardIndex,
      };
    }
    return {
      boards: state.boards,
      displayBoardIndex: state.displayBoardIndex,
    };
  }

  return EMPTY_DATA;
};

function BoardContextProvider({ children }) {
  const [boardData, dispatchBoardData] = useReducer(
    boardDataReducer,
    DUMMY_STATE
  );

  const { boards, displayBoardIndex } = boardData;

  let displayColumns = [];
  if (boards.length > 0) {
    displayColumns = boards[displayBoardIndex].columns.map((col) => {
      return { name: col.name, id: col.id };
    });
  }

  const addTaskHandler = (task, columnId) => {
    dispatchBoardData({ type: "ADD_TASK", task: task, columnId: columnId });
  };

  const updateTaskHandler = (task, columnId) => {
    dispatchBoardData({ type: "UPDATE_TASK", task: task, columnId: columnId });
  };

  const boardContext = {
    boards: boards,
    displayBoardIndex: displayBoardIndex,
    displayColumns: displayColumns,
    addTask: addTaskHandler,
    updateTask: updateTaskHandler,
  };
  return (
    <BoardContext.Provider value={boardContext}>
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContextProvider;
