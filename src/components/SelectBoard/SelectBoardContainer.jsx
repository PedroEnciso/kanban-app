import { useContext } from "react";

import BoardItem from "./BoardItem";
import HeadingS from "../UI/Typography/HeadingS";
import BoardContext from "../../store/board-context";

function SelectBoardContainer({ onClose }) {
  const { boards, displayBoardIndex, updateDisplayIndex } = useContext(
    BoardContext
  );

  const handleChangeBoard = (index) => {
    console.log("changing displayBoardIndex to " + index);
    updateDisplayIndex(index);
    onClose();
  };

  const boardItems = boards.map((board, index) => (
    <BoardItem
      key={board.id}
      name={board.name}
      onSelectBoard={handleChangeBoard.bind(null, index)}
      selected={index === displayBoardIndex}
    />
  ));

  return (
    <>
      <h2 className="pl-6">
        <HeadingS>All Boards ({boards.length})</HeadingS>
      </h2>
      <ul className="mt-5 ml-">{boardItems}</ul>
    </>
  );
}

export default SelectBoardContainer;
