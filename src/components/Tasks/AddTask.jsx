import { useContext } from "react";
import { useForm } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import BodyM from "../UI/Typography/BodyM";
import Select from "../UI/Select";
import FormBlock from "../UI/Forms/FormBlock";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import AddSubtasks from "../Subtasks/AddSubtasks";
import BoardContext from "../../store/board-context";

function AddTask({ onModalClose }) {
  const boardCtx = useContext(BoardContext);
  const { displayColumns, addTask } = boardCtx;

  const { register, handleSubmit } = useForm();

  function stopPropagation(e) {
    e.stopPropagation();
  }

  const findStatusName = (id) => {
    let status = displayColumns.filter((col) => col.id === id);
    return status[0].name;
  };

  const createSubtaskArray = (formData) => {
    const subtaskArray = [];
    let count = 1;
    for (const key in formData) {
      if (key.includes("subtask") && formData[key] !== "") {
        subtaskArray.push({
          id: `s${count}${Date.now()}`,
          title: formData[key],
          isCompleted: false,
        });
        count++;
      }
    }
    return subtaskArray;
  };

  const onSubmit = (data) => {
    const newTask = {
      id: `t${Math.random()}`,
      title: data.title,
      description: data.description,
      status: findStatusName(data.status),
      subtasks: createSubtaskArray(data),
    };
    addTask(newTask, data.status);
    onModalClose();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onClick={stopPropagation}
      className="flex flex-col gap-6"
    >
      <h2>
        <HeadingL>Add New Task</HeadingL>
      </h2>
      <FormBlock
        name="title"
        label="Title"
        type="text"
        placeholder="e.g. Take a coffee break"
        register={register}
      />
      <FormBlock
        name="description"
        label="Description"
        type="textarea"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        register={register}
      />
      <AddSubtasks register={register} />
      <div className="space-y-2">
        <BodyM>Status</BodyM>
        <Select
          name="status"
          optionList={boardCtx.displayColumns}
          register={register}
        />
      </div>
      <ButtonPrimary type="submit" text="Create Task" />
    </form>
  );
}

export default AddTask;
