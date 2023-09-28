import { useState } from "react";

import SelectBoardContainer from "./SelectBoardContainer";
import AddBoard from "./AddBoard";
import Modal from "../UI/Modal";

function BoardController({ onClose, type = null }) {
  const [displayType, setDisplayType] = useState(type);

  const showAddBoard = () => {
    setDisplayType("ADD_BOARD");
  };

  let display = <SelectBoardContainer onAddBoard={showAddBoard} />;
  let isNavModal = true;

  if (displayType === "ADD_BOARD") {
    display = <AddBoard />;
    isNavModal = false;
  }

  return (
    <Modal onModalClose={onClose} isNavModal={isNavModal}>
      {display}
    </Modal>
  );
}

export default BoardController;
