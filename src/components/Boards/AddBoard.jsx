import { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import InputBlock from "../UI/Forms/InputBlock";
import InputList from "../UI/Forms/InputList";

import BoardContext from "../../store/board-context";

const emptyBoardArray = [{ title: "Todo" }, { title: "Doing" }];

function AddBoard({ onClose }) {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: { columns: emptyBoardArray },
  });
  const { fields, remove, append } = useFieldArray({
    name: "columns",
    control,
  });

  const { addBoard } = useContext(BoardContext);

  const createBoard = (name, columns) => {
    const newBoard = {
      id: `b${Math.random()}`,
      name: name,
      columns: [],
    };
    columns.forEach((col) => {
      newBoard.columns.push({
        id: `c${Math.random()}`,
        name: col.title,
        tasks: [],
      });
    });
    return newBoard;
  };

  const onSubmit = (data) => {
    const newBoard = createBoard(data.name, data.columns);
    addBoard(newBoard);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <h2>
        <HeadingL>Add New Board</HeadingL>
      </h2>
      <InputBlock
        label="Board Name"
        registerName="name"
        register={register}
        errors={errors.name}
        errorMessage="Can't be empty"
        placeholder="e.g. Web Design"
      />
      <InputList
        title={"Board Columns"}
        fields={fields}
        errors={errors}
        remove={remove}
        append={append}
        register={register}
        fieldArrayName="columns"
        placeholderName="column"
      />
      <ButtonPrimary type="submit" text="Create New Board" />
    </form>
  );
}

export default AddBoard;
