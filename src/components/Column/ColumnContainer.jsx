import { useContext, useState } from "react";
import EmptyBoardMessage from "./EmptyBoardMessage";
import Column from "./Column";
import BoardContext from "../../store/board-context";
import Modal from "../UI/Modal";
import AddBoard from "../Boards/AddBoard";

function ColumnContainer() {
  const [showNewColumn, setShowNewColumn] = useState(false);
  const { displayColumns, boards, displayBoardIndex } =
    useContext(BoardContext);

  if (displayColumns.length === 0)
    return <EmptyBoardMessage board={boards[displayBoardIndex]} />;

  const newColumnHandler = () => {
    setShowNewColumn((prev) => !prev);
  };

  const updatedColumns = displayColumns.map((col) => {
    return { title: col.name, id: col.id };
  });

  return (
    <div className="flex gap-6 px-4 overflow-x-scroll grow pb-10">
      {boards[displayBoardIndex].columns.map((column) => (
        <Column key={column.id} column={column} columnList={displayColumns} />
      ))}
      <div className="flex items-center bg-linesLight dark:bg-darkGray w-[280px] mt-12 shrink-0 rounded-md ">
        <button
          onClick={newColumnHandler}
          className="w-full h-full text-mediumGray hover:text-mainPurple transition-colors duration-300"
        >
          +New Column
        </button>
      </div>
      {showNewColumn && (
        <Modal onModalClose={newColumnHandler}>
          <AddBoard
            onClose={newColumnHandler}
            board={boards[displayBoardIndex]}
            columns={updatedColumns}
          />
        </Modal>
      )}
    </div>
  );
}

export default ColumnContainer;
