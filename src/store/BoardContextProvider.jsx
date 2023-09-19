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

  const boardContext = {
    boards: boards,
    displayBoardIndex: displayBoardIndex,
    displayColumns: displayColumns,
    addTask: addTaskHandler,
  };
  return (
    <BoardContext.Provider value={boardContext}>
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContextProvider;
