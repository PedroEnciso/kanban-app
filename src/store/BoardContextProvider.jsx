import { useEffect, useState } from "react";

import BoardContext from "./board-context";
import data from "../data";

const DUMMY_DATA = data.boards;

function BoardContextProvider({ children }) {
  const [boardData, setBoardData] = useState(DUMMY_DATA);
  const [displayBoardIndex, setdisplayBoardIndex] = useState(0);

  let displayColumnNames = [];
  if (boardData.length > 0) {
    displayColumnNames = boardData[displayBoardIndex].columns.map(
      (col) => col.name
    );
  }

  const boardContext = {
    boards: boardData,
    displayBoardIndex: displayBoardIndex,
    displayColumnNames: displayColumnNames,
  };
  return (
    <BoardContext.Provider value={boardContext}>
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContextProvider;
