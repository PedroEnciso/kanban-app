import { useContext } from "react";

import BoardItem from "./BoardItem";
import ThemeSelector from "./ThemeSelector";
import HeadingS from "../UI/Typography/HeadingS";
import Modal from "../UI/Modal";
import AddBoard from "./AddBoard";
import BoardContext from "../../store/board-context";

function SelectBoardContainer({ onAddBoard }) {
  const { boards, displayBoardIndex, updateDisplayIndex } =
    useContext(BoardContext);

  const handleChangeBoard = (index) => {
    console.log("changing displayBoardIndex to " + index);
    updateDisplayIndex(index);
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
      <ThemeSelector />
    </>
  );
}

export default SelectBoardContainer;
