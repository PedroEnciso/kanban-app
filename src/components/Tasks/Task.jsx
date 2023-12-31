import { useState } from "react";

import Modal from "../UI/Modal";
import HeadingM from "../UI/Typography/HeadingM";
import BodyM from "../UI/Typography/BodyM";
import TaskFocusContainer from "./TaskFocusContainer";

function Task({ task, columnList }) {
  const [isShowingFocusedView, setIsShowingFocusedView] = useState(false);

  let totalSubtasks = 0;
  let completedSubtasks = 0;

  task.subtasks.forEach((sub) => {
    ++totalSubtasks;
    if (sub.isCompleted) ++completedSubtasks;
  });

  const currentColumn = columnList.filter((col) => task.status === col.name);
  let currentStatusId = currentColumn[0].id;

  const clickHandler = () => {
    setIsShowingFocusedView((prevState) => !prevState);
  };

  return (
    <>
      <li
        tabIndex="0"
        onClick={clickHandler}
        className="w-[280px] bg-white dark:bg-darkGray px-4 py-6 rounded-lg shadow-md dark:shadow-[#364E7E]/10"
      >
        <h3 className="pb-2">
          <HeadingM>{task.title}</HeadingM>
        </h3>
        <BodyM textColor="text-mediumGray">
          {completedSubtasks} of {totalSubtasks} subtasks
        </BodyM>
      </li>
      {isShowingFocusedView && (
        <Modal onModalClose={clickHandler}>
          <TaskFocusContainer
            type="VIEW_TASK"
            onModalClose={clickHandler}
            task={task}
            totalSubtasks={totalSubtasks}
            completedSubtasks={completedSubtasks}
            statusId={currentStatusId}
            columnList={columnList}
          />
        </Modal>
      )}
    </>
  );
}

export default Task;
