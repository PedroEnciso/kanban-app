import { createContext } from "react";

const BoardContext = createContext({
  boards: [],
  displayBoardIndex: null,
  displayColumnNames: [],
  addBoard: () => {},
  editBoard: () => {},
  removeBoard: () => {},
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  updateDisplayIndex: () => {},
});

export default BoardContext;
