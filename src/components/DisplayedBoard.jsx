import React from "react";

import EmptyBoardMessage from "./EmptyBoardMessage";

function DisplayedBoard({ board }) {
  // check if the board has any columns to display. if they do, display each column as a component. otherwise, display the component showing no data available
  return <EmptyBoardMessage />;
  if (board.columns.length === 0) return <EmptyBoardMessage />;
  return <div>hello</div>;
}

export default DisplayedBoard;
