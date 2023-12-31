import { useContext } from "react";

import BoardItem from "./BoardItem";
import HeadingS from "../UI/Typography/HeadingS";
import BoardContext from "../../store/board-context";

function SelectBoard({ onAddBoard, onClose = () => {} }) {
  const { boards, displayBoardIndex, updateDisplayIndex } =
    useContext(BoardContext);

  const handleChangeBoard = (index) => {
    updateDisplayIndex(index);
    onClose();
  };

  const handleNewBoard = () => {
    onAddBoard();
  };

  const boardItems = boards.map((board, index) => (
    <BoardItem
      key={board.id}
      name={board.name}
      onSelectBoard={handleChangeBoard.bind(null, index)}
      type={index === displayBoardIndex && "selected"}
    />
  ));
  return (
    <>
      <h2 className="pl-6">
        <HeadingS>All Boards ({boards.length})</HeadingS>
      </h2>
      <ul className="mt-5 ml-">
        {boardItems}
        <BoardItem
          name="+ Create New Board"
          onSelectBoard={handleNewBoard}
          type="add"
        />
      </ul>
    </>
  );
}

export default SelectBoard;
