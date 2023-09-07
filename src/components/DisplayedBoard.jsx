import React from "react";

import EmptyBoardMessage from "./EmptyBoardMessage";
import Column from "./Column";

// name ideas:
// ColumnContainer
// ColumnDisplay

function DisplayedBoard({ board }) {
  if (board.columns.length === 0) return <EmptyBoardMessage />;

  return (
    <div className="flex gap-6 px-4">
      {board.columns.map((column) => (
        <Column key={column.name} column={column} />
      ))}
    </div>
  );
}

export default DisplayedBoard;
