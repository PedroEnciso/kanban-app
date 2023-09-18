import { useEffect, useState, useReducer } from "react";

import BoardContext from "./board-context";
import data from "../data";

const DUMMY_DATA = data.boards;

const EMPTY_DATA = {
  boards: [],
};

const BoardDataReducer = (state, action) => {
  if (action === "ADD_TASK") {
    console.log(`Adding task to col ${action.columnId}`, task);
    return DUMMY_DATA;
  }

  return EMPTY_DATA;
};

function BoardContextProvider({ children }) {
  const [boardData, dispatchBoardData] = useReducer(
    BoardDataReducer,
    DUMMY_DATA
  );
  // const [boardData, setBoardData] = useState(DUMMY_DATA);
  const [displayBoardIndex, setdisplayBoardIndex] = useState(0);

  let displayColumns = [];
  if (boardData.length > 0) {
    displayColumns = boardData[displayBoardIndex].columns.map((col) => {
      return { name: col.name, id: col.id };
    });
  }

  const addTaskHandler = (task, columnId) => {
    dispatchBoardData({ type: "ADD_TASK", task: task, columnId: columnId });
  };

  const boardContext = {
    boards: boardData,
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
