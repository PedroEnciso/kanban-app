import { useState, useContext } from "react";

import Modal from "../UI/Modal";
import AddTask from "../Tasks/AddTask";
import BoardContext from "../../store/board-context";
import BoardController from "../Boards/BoardController";

import logo from "../../assets/logo-mobile.svg";
import chevronDown from "../../assets/icon-chevron-down.svg";
import plus from "../../assets/icon-add-task-mobile.svg";
import ellipses from "../../assets/icon-vertical-ellipsis.svg";
import BoardFocusContainer from "../Boards/BoardFocusContainer";

function Nav() {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isShowingBoardController, setIsShowingBoardController] =
    useState(false);
  const [isShowingBoardOptions, setIsShowingBoardOptions] = useState(false);
  const { boards, displayBoardIndex, displayColumns } =
    useContext(BoardContext);

  const handleToggleBoardController = () => {
    setIsShowingBoardController((prev) => !prev);
  };

  const handleToggleModal = () => {
    setIsShowingModal((prev) => !prev);
  };

  const handleToggleBoardOptions = () => {
    setIsShowingBoardOptions((prev) => !prev);
  };

  return (
    <>
      <nav className="px-4 py-6 flex justify-between items-center bg-white dark:bg-darkGray">
        <div className="flex gap-4">
          <div>
            <img src={logo} alt="KanBan logo." />
          </div>
          <button
            onClick={handleToggleBoardController}
            disabled={isShowingBoardController}
            className="flex items-center gap-2 relative"
          >
            <span>{boards[displayBoardIndex].name}</span>
            <img src={chevronDown} alt="View boards." />
            {isShowingBoardController && (
              <BoardController onClose={handleToggleBoardController} />
            )}
          </button>
        </div>
        <div className="relative flex gap-4 items-center">
          <button
            className="bg-mainPurple hover:bg-mainPurpleHover disabled:bg-mainPurple/25 px-4 py-2.5 rounded-2xl"
            disabled={boards.length === 0}
            onClick={handleToggleModal}
          >
            <img src={plus} alt="Add a task." />
          </button>
          <button
            onClick={handleToggleBoardOptions}
            className="w-[4px] h-[16px] sm:w-auto sm:h-auto"
          >
            <img src={ellipses} alt="" className="w-full" />
          </button>
          {isShowingBoardOptions && (
            <BoardFocusContainer
              type="OPTIONS"
              onClose={handleToggleBoardOptions}
              currentBoard={boards[displayBoardIndex]}
              columns={displayColumns}
            />
          )}
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
