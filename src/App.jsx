import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Layout from "./components/Layout/Layout";
import DisplayedBoard from "./components/DisplayedBoard";

import boardData from "./data.js";

function App() {
  const [boards, setBoards] = useState(boardData.boards);
  const [displayedBoard, setDisplayedBoard] = useState(boardData.boards[0]);

  return (
    <Layout>
      <Nav />
      <DisplayedBoard board={displayedBoard} />
    </Layout>
  );
}

export default App;
