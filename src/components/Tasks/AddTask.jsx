import { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import InputBlock from "../UI/Forms/InputBlock";
import InputList from "../UI/Forms/InputList";
import StatusSelector from "../UI/StatusSelector";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import BoardContext from "../../store/board-context";

function AddTask({ onModalClose, task }) {
  const { displayColumns, addTask, updateTask } = useContext(BoardContext);

  let defaultTitle = "";
  let defaultDescription = "";
  let defaultSubtasks = [
    { placeholder: "e.g. Make coffee" },
    { placeholder: "e.g. Drink coffee and smile" },
  ];
  let defaultStatus = displayColumns[0];
  let modalTitle = "Add New Task";
  let buttonText = "Create Task";

  if (task) {
    defaultTitle = task.title;
    defaultDescription = task.description;
    defaultSubtasks = task.subtasks;
    let statusIndex = displayColumns.findIndex(
      (col) => col.name === task.status
    );
    defaultStatus = displayColumns[statusIndex];
    modalTitle = "Edit Task";
    buttonText = "Save Changes";
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm({
    defaultValues: {
      title: defaultTitle,
      description: defaultDescription,
      subtasks: defaultSubtasks,
      status: defaultStatus,
    },
  });
  const selectedStatus = watch("status");

  const { fields, remove, append } = useFieldArray({
    name: "subtasks",
    control,
  });

  const createSubtaskArray = (formData) => {
    return formData.map((sub, index) => {
      if (
        Object.hasOwn(sub, "id") &&
        Object.hasOwn(sub, "title") &&
        Object.hasOwn(sub, "isCompleted")
      ) {
        return sub;
      } else {
        return {
          id: `s${index}${Math.random()}`,
          title: sub.title,
          isCompleted: false,
        };
      }
    });
  };

  const onSubmit = (data) => {
    if (task) {
      const updatedTask = {
        id: task.id,
        title: data.title,
        description: data.description,
        status: data.status.name,
        subtasks: createSubtaskArray(data.subtasks),
      };
      let newColumnId = null;
      if (task.status !== updatedTask.status) {
        newColumnId = data.status.id;
      }
      updateTask(updatedTask, newColumnId, task.status);
    } else {
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
