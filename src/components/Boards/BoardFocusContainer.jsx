import { useState } from "react";

import TaskOptions from "../Tasks/TaskOptions";
import AddBoard from "./AddBoard";
import Modal from "../UI/Modal";

function BoardFocusContainer({ type, onClose, currentBoard, columns }) {
  const [view, setView] = useState(type);

  const onEdit = () => {
    setView("EDIT");
  };

  const onDelete = () => {
    setView("DELETE");
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
    content = <p>DELETEING!</p>;
  }

  return <>{content}</>;
}

export default BoardFocusContainer;
