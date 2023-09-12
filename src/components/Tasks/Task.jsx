import { useState } from "react";

import Modal from "../UI/Modal";
import ViewTask from "./ViewTask";
import HeadingM from "../UI/Typography/HeadingM";
import BodyM from "../UI/Typography/BodyM";

function Task({ task, columnList }) {
  const [isShowingFocusedView, setIsShowingFocusedView] = useState(false);

  let totalSubtasks = 0;
  let completedSubtasks = 0;

  task.subtasks.forEach((sub) => {
    ++totalSubtasks;
    if (sub.isCompleted) ++completedSubtasks;
  });

  const clickHandler = () => {
    setIsShowingFocusedView((prevState) => !prevState);
  };

  return (
    <>
      <li
        onClick={clickHandler}
        className="w-[280px] bg-white dark:bg-darkGray px-4 py-6 rounded-lg shadow-md dark:shadow-[#364E7E]/10"
      >
        <h3 className="pb-2">
          <HeadingM>{task.title}</HeadingM>
        </h3>
        <BodyM>
          {completedSubtasks} of {totalSubtasks} subtasks
        </BodyM>
      </li>
      {isShowingFocusedView && (
        <Modal onModalClose={clickHandler}>
          <ViewTask
            task={task}
            totalSubtasks={totalSubtasks}
            completedSubtasks={completedSubtasks}
            columnList={columnList}
          />
        </Modal>
      )}
    </>
  );
}

export default Task;
