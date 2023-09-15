import { createContext } from "react";

const BoardContext = createContext({
  boards: [],
  displayBoardIndex: null,
  displayColumnNames: [],
  addNewBoard: () => {},
  editBoard: () => {},
  removeBoard: () => {},
  addTask: () => {},
  removeTask: () => {},
  editTask: () => {},
});

export default BoardContext;
