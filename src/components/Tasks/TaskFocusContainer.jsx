import { useState, useContext } from "react";

import ViewTask from "./ViewTask";
import DeleteTask from "./DeleteTask";
import BoardContext from "../../store/board-context";

function TaskFocusContainer(props) {
  const [taskView, setTaskView] = useState(props.type || "VIEW_TASK");

  const { deleteTask } = useContext(BoardContext);

  const showDeleteTask = () => {
    setTaskView("DELETE_TASK");
  };

  const showViewTask = () => {
    setTaskView("VIEW_TASK");
  };

  const updatedProps = { ...props, showDeleteTask };

  if (taskView === "VIEW_TASK") {
    return <ViewTask {...updatedProps} />;
  } else if (taskView === "DELETE_TASK") {
    return (
      <DeleteTask
        name={props.task.title}
        onCancel={showViewTask}
        onDelete={deleteTask.bind(null, props.task.id, props.statusId)}
      />
    );
  } else {
    return <p>Edit Task</p>;
  }
}

export default TaskFocusContainer;
