import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Layout from "./components/Layout/Layout";
import ColumnContainer from "./components/Column/ColumnContainer";

import boardData from "./data.js";

function App() {
  const [boards, setBoards] = useState(boardData.boards);
  const [displayedBoard, setDisplayedBoard] = useState(boardData.boards[0]);

  return (
    <Layout>
      <Nav />
      <ColumnContainer board={displayedBoard} />
    </Layout>
  );
}

export default App;
