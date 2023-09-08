// import { useState } from "react";

// import Modal from "./UI/Modal";
// import TaskFocusView from "./TaskFocusView";
import EmptyBoardMessage from "./EmptyBoardMessage";
import Column from "./Column";

// name ideas:
// ColumnContainer
// ColumnDisplay

function DisplayedBoard({ board }) {
  // const [isShowingFocusedView, setIsShowingFocusedView] = useState(false);
  // const clickHandler = () => {
  //   setIsShowingFocusedView((prevState) => !prevState);
  // };

  if (board.columns.length === 0) return <EmptyBoardMessage />;

  return (
    <div className="flex gap-6 px-4 overflow-x-scroll">
      {/* {isShowingFocusedView && (
        <Modal>
          <TaskFocusView />
        </Modal>
      )} */}
      {board.columns.map((column) => (
        <Column key={column.name} column={column} />
      ))}
    </div>
  );
}

export default DisplayedBoard;
