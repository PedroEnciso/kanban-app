import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Layout from "./components/Layout/Layout";
import ColumnContainer from "./components/Column/ColumnContainer";

import boardData from "./data.js";

const emptyData = {
  columns: [],
};

function App() {
  const [boards, setBoards] = useState(boardData.boards);
  const [displayedBoardIndex, setDisplayedBoardIndex] = useState(0);

  return (
    <Layout>
      <Nav
        updateBoardData={setBoards}
        boardData={boards}
        boardIndex={displayedBoardIndex}
      />
      <ColumnContainer board={boards[displayedBoardIndex]} />
    </Layout>
  );
}

export default App;
