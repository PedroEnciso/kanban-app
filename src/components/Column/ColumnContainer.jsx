import { useContext } from "react";
import EmptyBoardMessage from "./EmptyBoardMessage";
import Column from "./Column";
import BoardContext from "../../store/board-context";

function ColumnContainer() {
  const boardCtx = useContext(BoardContext);
  const { displayColumns, boards, displayBoardIndex } = boardCtx;

  if (displayColumns.length === 0) return <EmptyBoardMessage />;

  const newColumnHandler = () => {
    console.log("adding a new column!");
  };

  return (
    <div className="flex gap-6 px-4 overflow-x-scroll grow pb-10">
      {boards[displayBoardIndex].columns.map((column) => (
        <Column key={column.id} column={column} columnList={displayColumns} />
      ))}
      <div className="flex items-center bg-linesLight dark:bg-darkGray w-[280px] mt-12 shrink-0 rounded-md ">
        <button
          onClick={newColumnHandler}
          className="w-full py-8 text-mediumGray hover:text-mainPurple transition-colors duration-300"
        >
          +New Column
        </button>
      </div>
    </div>
  );
}

export default ColumnContainer;
