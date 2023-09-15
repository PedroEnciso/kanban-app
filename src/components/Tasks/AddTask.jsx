import { useContext } from "react";

import HeadingL from "../UI/Typography/HeadingL";
import BodyM from "../UI/Typography/BodyM";
import Select from "../UI/Select";
import FormBlock from "../UI/Forms/FormBlock";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import AddSubtasks from "../Subtasks/AddSubtasks";
import BoardContext from "../../store/board-context";

function AddTask() {
  const boardCtx = useContext(BoardContext);

  function stopPropagation(e) {
    e.stopPropagation();
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log("Added task.");
  };
  return (
    <form onClick={stopPropagation} className="flex flex-col gap-6">
      <h2>
        <HeadingL>Add New Task</HeadingL>
      </h2>
      <FormBlock
        name="title"
        label="Title"
        type="text"
        placeholder="e.g. Take a coffee break"
      />
      <FormBlock
        name="description"
        label="Description"
        type="textarea"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
      />
      <AddSubtasks />
      <div className="space-y-2">
        <BodyM>Status</BodyM>
        <Select optionList={boardCtx.displayColumnNames} />
      </div>
      <ButtonPrimary
        type="submit"
        text="Create Task"
        onButtonClick={handleAddTask}
      />
    </form>
  );
}

export default AddTask;
