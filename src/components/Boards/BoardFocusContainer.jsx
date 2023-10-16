import { useState } from "react";

import TaskOptions from "../Tasks/TaskOptions";
import AddBoard from "./AddBoard";
import Modal from "../UI/Modal";
import DeleteTask from "../Tasks/DeleteTask";

function BoardFocusContainer({
  type,
  onClose,
  currentBoard,
  columns,
  deleteBoard,
}) {
  const [view, setView] = useState(type);

  const onEdit = () => {
    setView("EDIT");
  };

  const onDelete = () => {
    setView("DELETE");
  };

  const cancelDeleteHandler = () => {
    onClose();
  };

  const deleteBoardHandler = () => {
    deleteBoard(currentBoard.id);
    onClose();
  };

  let content = "no content";

  if (view === "OPTIONS") {
    content = <TaskOptions type="BOARD" onDelete={onDelete} onEdit={onEdit} />;
  }

  let updatedColumns = [];
  if (columns.length > 0) {
    updatedColumns = columns.map((col) => {
      return { title: col.name, id: col.id };
    });
  }

  if (view === "EDIT") {
    content = (
      <Modal onModalClose={onClose}>
        <AddBoard
          board={currentBoard}
          columns={updatedColumns}
          onClose={onClose}
        />
      </Modal>
    );
  }

  if (view === "DELETE") {
    content = (
      <Modal onModalClose={onClose}>
        <DeleteTask
          name={currentBoard.name}
          onCancel={cancelDeleteHandler}
          onDelete={deleteBoardHandler}
          type="BOARD"
        />
      </Modal>
    );
  }

  return <>{content}</>;
}

export default BoardFocusContainer;
