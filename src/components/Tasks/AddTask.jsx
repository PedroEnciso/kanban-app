import { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import InputBlock from "../UI/Forms/InputBlock";
import InputList from "../UI/Forms/InputList";
import StatusSelector from "../UI/StatusSelector";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import BoardContext from "../../store/board-context";

const emptySubtasks = [
  { placeholder: "e.g. Make coffee" },
  { placeholder: "e.g. Drink coffee and smile" },
];

function AddTask({ onModalClose, task, statusId }) {
  const { displayColumns, addTask, updateTask } = useContext(BoardContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm({
    defaultValues: { subtasks: emptySubtasks, status: displayColumns[0] },
  });
  const selectedStatus = watch("status");

  const { fields, remove, append } = useFieldArray({
    name: "subtasks",
    control,
  });

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
    return formData.map((sub, index) => {
      return {
        id: `s${index}${Math.random()}`,
        title: sub.title,
        isCompleted: false,
      };
    });
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
        status: data.status.name,
        subtasks: createSubtaskArray(data.subtasks),
      };
      addTask(newTask, data.status.id);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 relative"
    >
      <h2>
        <HeadingL>{modalTitle}</HeadingL>
      </h2>
      <InputBlock
        label="Title"
        registerName="title"
        register={register}
        errors={errors.title}
        errorMessage="Can't be empty."
        placeholder="e.g. Take a coffee break"
      />
      <InputBlock
        label="Description"
        registerName="description"
        register={register}
        type="textarea"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
      />
      <InputList
        title={"Subtasks"}
        fields={fields}
        errors={errors}
        remove={remove}
        append={append}
        register={register}
        fieldArrayName="subtasks"
        placeholderName="subtask"
      />
      <StatusSelector
        title="Current Status"
        control={control}
        selectedStatus={selectedStatus}
        displayColumns={displayColumns}
      />
      <ButtonPrimary type="submit" text={buttonText} />
    </form>
  );
}

export default AddTask;
