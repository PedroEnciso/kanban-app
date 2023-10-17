import { useState, useContext } from "react";

import Modal from "../UI/Modal";
import AddBoard from "../Boards/AddBoard";

function EmptyBoardMessage({ board }) {
  const [showEditBoard, setShowEditBoard] = useState(false);

  const toggleHandler = () => {
    setShowEditBoard((prev) => !prev);
  };
  return (
    <div className="flex-grow flex flex-col justify-center items-center mt-[-48px] px-4">
      <p className="text-center text-mediumGray font-bold text-lg">
        This board is empty. Create a new column to get started.
      </p>
      <button
        onClick={toggleHandler}
        className="text-[15px] font-bold text-white py-4 px-5 mt-6 bg-mainPurple rounded-[24px]"
      >
        +Add New Column
      </button>
      {showEditBoard && (
        <Modal onModalClose={toggleHandler}>
          <AddBoard onClose={toggleHandler} board={board} />
        </Modal>
      )}
    </div>
  );
}

export default EmptyBoardMessage;
