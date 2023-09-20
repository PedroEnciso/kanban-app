import { useState, useContext } from "react";

import Modal from "../UI/Modal";
import AddTask from "../Tasks/AddTask";
import BoardContext from "../../store/board-context";
import SelectBoardContainer from "../SelectBoard/SelectBoardContainer";

import logo from "../../assets/logo-mobile.svg";
import chevronDown from "../../assets/icon-chevron-down.svg";
import plus from "../../assets/icon-add-task-mobile.svg";
import ellipses from "../../assets/icon-vertical-ellipsis.svg";

function Nav() {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isShowingSelectBoard, setIsShowingSelectBoard] = useState(false);
  const boardCtx = useContext(BoardContext);
  const { boards, displayBoardIndex } = boardCtx;

  const handleToggleSelectBoard = () => {
    setIsShowingSelectBoard((prev) => !prev);
  };

  const handleToggleModal = () => {
    setIsShowingModal((prev) => !prev);
  };

  return (
    <>
      <nav className="px-4 py-5 flex justify-between items-center bg-white dark:bg-darkGray">
        <div className="flex gap-4">
          <div>
            <img src={logo} alt="KanBan logo." />
          </div>
          <button
            onClick={handleToggleSelectBoard}
            className="flex items-center gap-2 relative"
          >
            <span>{boards[displayBoardIndex].name}</span>
            <img src={chevronDown} alt="View boards." />
            {isShowingSelectBoard && (
              <Modal isNavModal={true}>
                <SelectBoardContainer onClose={handleToggleSelectBoard} />
              </Modal>
            )}
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="bg-mainPurple hover:bg-mainPurpleHover disabled:bg-mainPurple/25 px-4 py-2.5 rounded-2xl"
            disabled={boards.length === 0}
            onClick={handleToggleModal}
          >
            <img src={plus} alt="Add a task." />
          </button>
          <button className="w-[4px] h-[16px] sm:w-auto sm:h-auto">
            <img src={ellipses} alt="" className="w-full" />
          </button>
        </div>
      </nav>
      {isShowingModal && (
        <Modal onModalClose={handleToggleModal}>
          <AddTask onModalClose={handleToggleModal} />
        </Modal>
      )}
    </>
  );
}

export default Nav;
