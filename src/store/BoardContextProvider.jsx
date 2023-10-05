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
  if (action.type === "ADD_BOARD") {
    const updatedBoards = [...state.boards];
    updatedBoards.push(action.board);

    return {
      boards: updatedBoards,
      displayBoardIndex: updatedBoards.length - 1,
    };
  }

  if (action.type === "ADD_TASK") {
    const updatedBoard = [...state.boards];
    let currentBoardColumns = updatedBoard[state.displayBoardIndex].columns;
    let columnIndex = currentBoardColumns.findIndex(
      (col) => col.id === action.columnId
    );
    currentBoardColumns[columnIndex].tasks.push(action.task);

    // save to localStorage
    localStorage.setItem("boards", JSON.stringify(updatedBoard));
    return { boards: updatedBoard, displayBoardIndex: state.displayBoardIndex };
  }

  if (action.type === "UPDATE_TASK") {
    // updatedTask, newStatusId = null, oldStatusName = null
    // get the old column that contained action.task
    const updatedBoards = [...state.boards];
    const previousColumnIndex = updatedBoards[
      state.displayBoardIndex
    ].columns.findIndex((col) => col.name === action.oldStatusName);
    const previousColumn =
      updatedBoards[state.displayBoardIndex].columns[previousColumnIndex];

    if (action.newStatusId && previousColumn.id !== action.newStatusId) {
      // remove task in old column
      let columnWithDeletedTask =
        updatedBoards[state.displayBoardIndex].columns[previousColumnIndex];
      let deletedTaskList = columnWithDeletedTask.tasks.filter(
        (task) => task.id !== action.updatedTask.id
      );
      // update boards with updated column
      updatedBoards[state.displayBoardIndex].columns[
        previousColumnIndex
      ].tasks = deletedTaskList;
      // add task to its new column
      const columnWithAddedTaskIndex = updatedBoards[
        state.displayBoardIndex
      ].columns.findIndex((col) => col.id === action.newStatusId);
      const columnWithAddedTask =
        updatedBoards[state.displayBoardIndex].columns[
          columnWithAddedTaskIndex
        ];
      columnWithAddedTask.tasks.push(action.updatedTask);
    } else {
      //status has not changed, update the task
      const taskIndex = previousColumn.tasks.findIndex(
        (task) => task.id === action.updatedTask.id
      );
      previousColumn.tasks[taskIndex] = action.updatedTask;
    }

    localStorage.setItem("boards", JSON.stringify(updatedBoards));
    return {
      boards: updatedBoards,
      displayBoardIndex: state.displayBoardIndex,
    };
  }

  if (action.type === "DELETE_TASK") {
    const updatedBoards = [...state.boards];
    const currentBoard = updatedBoards[state.displayBoardIndex];
    const currentColumnIndex = currentBoard.columns.findIndex(
      (col) => col.id === action.statusId
    );
    const currentColumn = currentBoard.columns[currentColumnIndex];
    const updatedColumnTasks = currentColumn.tasks.filter(
      (task) => task.id !== action.id
    );
    currentColumn.tasks = updatedColumnTasks;

    localStorage.setItem("boards", JSON.stringify(updatedBoards));

    return {
      boards: updatedBoards,
      displayBoardIndex: state.displayBoardIndex,
    };
  }

  if (action.type === "UPDATE_BOARD_INDEX") {
    return {
      boards: state.boards,
      displayBoardIndex: action.index,
    };
  }

  if (action.type === "BOARDS_FROM_LOCALSTORAGE") {
    return {
      boards: action.boards,
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

  // check if data has been saved in localStorage
  // if no data in localStorage, use DummyData
  // localStorage data will be updated whenever boardDataReducer saves state
  useEffect(() => {
    const data = localStorage.getItem("boards");
    if (data) {
      // data was found in LocalStorage
      dispatchBoardData({
        type: "BOARDS_FROM_LOCALSTORAGE",
        boards: JSON.parse(data),
      });
    }
  }, []);

  const { boards, displayBoardIndex } = boardData;

  let displayColumns = [];
  if (boards.length > 0) {
    displayColumns = boards[displayBoardIndex].columns.map((col) => {
      return { name: col.name, id: col.id };
    });
  }

  const addBoardHandler = (board) => {
    dispatchBoardData({ type: "ADD_BOARD", board: board });
  };

  const addTaskHandler = (task, columnId) => {
    dispatchBoardData({ type: "ADD_TASK", task: task, columnId: columnId });
  };

  const updateTaskHandler = (
    updatedTask,
    newStatusId = null,
    oldStatusName = null
  ) => {
    dispatchBoardData({
      type: "UPDATE_TASK",
      updatedTask: updatedTask,
      newStatusId: newStatusId,
      oldStatusName: oldStatusName,
    });
  };

  const deleteTaskHandler = (id, statusId) => {
    dispatchBoardData({ type: "DELETE_TASK", id: id, statusId: statusId });
  };

  const updateDisplayIndexHandler = (index) => {
    dispatchBoardData({ type: "UPDATE_BOARD_INDEX", index: index });
  };

  const boardContext = {
    boards: boards,
    displayBoardIndex: displayBoardIndex,
    displayColumns: displayColumns,
    addBoard: addBoardHandler,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
    updateTask: updateTaskHandler,
    updateDisplayIndex: updateDisplayIndexHandler,
  };

  return (
    <BoardContext.Provider value={boardContext}>
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContextProvider;
