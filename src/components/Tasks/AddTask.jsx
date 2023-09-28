import { useContext } from "react";
import { useForm } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import BodyM from "../UI/Typography/BodyM";
import Select from "../UI/Select";
import FormBlock from "../UI/Forms/FormBlock";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import AddSubtasks from "../Subtasks/AddSubtasks";
import BoardContext from "../../store/board-context";

function AddTask({ onModalClose, task, statusId }) {
  const { displayColumns, addTask, updateTask } = useContext(BoardContext);
  const { register, handleSubmit } = useForm();

  const isEditingTask = Boolean(task);

  const findStatusName = (id) => {
    let status = displayColumns.filter((col) => col.id === id);
    return status[0].name;
  };

  const findStatusId = (name) => {
    let status = displayColumns.filter((col) => col.name === name);
    return status[0].id;
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
    if (isEditingTask) {
      const updatedTask = {
        id: task.id,
        title: data.title,
        description: data.description,
        status: findStatusName(data.status),
        subtasks: createSubtaskArray(data),
      };
      let newColumnId = null;
      if (task.status !== updatedTask.status) {
        newColumnId = data.status;
      }
      updateTask(updatedTask, newColumnId, task.status);
    } else {
      // add new task
      const newTask = {
        id: `t${Math.random()}`,
        title: data.title,
        description: data.description,
        status: findStatusName(data.status),
        subtasks: createSubtaskArray(data),
      };
      addTask(newTask, data.status);
    }

    onModalClose();
  };

  const modalTitle = isEditingTask ? "Edit Task" : "Add New Task";
  const title = isEditingTask ? task.title : null;
  const description = isEditingTask ? task.description : null;
  const status = isEditingTask ? findStatusId(task.status) : null;
  const buttonText = isEditingTask ? "Save Changes" : "Create Task";
  const subtasks = isEditingTask ? task.subtasks : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <h2>
        <HeadingL>{modalTitle}</HeadingL>
      </h2>
      <FormBlock
        name="title"
        label="Title"
        type="text"
        defaultValue={title}
        placeholder="e.g. Take a coffee break"
        register={register}
      />
      <FormBlock
        name="description"
        label="Description"
        type="textarea"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        defaultValue={description}
        register={register}
      />
      <AddSubtasks register={register} prevSubtasks={subtasks} />
      <div className="space-y-2">
        <BodyM>Status</BodyM>
        <Select
          name="status"
          optionList={displayColumns}
          defaultValue={status}
          register={register}
        />
      </div>
      <ButtonPrimary type="submit" text={buttonText} />
    </form>
  );
}

export default AddTask;
