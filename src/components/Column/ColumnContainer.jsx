import { useContext } from "react";
import EmptyBoardMessage from "./EmptyBoardMessage";
import Column from "./Column";
import BoardContext from "../../store/board-context";

function ColumnContainer() {
  const boardCtx = useContext(BoardContext);
  const { displayColumnNames, boards, displayBoardIndex } = boardCtx;

  if (displayColumnNames.length === 0) return <EmptyBoardMessage />;

  return (
    <div className="flex gap-6 px-4 overflow-x-scroll">
      {boards[displayBoardIndex].columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          columnList={displayColumnNames}
        />
      ))}
    </div>
  );
}

export default ColumnContainer;
