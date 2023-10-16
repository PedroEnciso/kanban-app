import { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import InputBlock from "../UI/Forms/InputBlock";
import InputList from "../UI/Forms/InputList";

import BoardContext from "../../store/board-context";

function AddBoard({ onClose, board, columns }) {
  let title = "Add New Board";
  let buttonText = "Create New Board";
  let defaultTitle = "";
  let defaultColumns = [{ title: "Todo" }, { title: "Done" }];
  if (board) {
    title = "Edit Board";
    buttonText = "Save Changes";
    defaultTitle = board.name;
    defaultColumns = columns;
  }

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: { columns: defaultColumns, name: defaultTitle },
  });
  const { fields, remove, append } = useFieldArray({
    name: "columns",
    control,
  });

  const { addBoard, updateBoard } = useContext(BoardContext);

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

  const createUpdatedBoard = (board, newName, newColumns) => {
    const updatedBoard = { ...board };
    updatedBoard.name = newName;
    const updatedColumns = [];
    newColumns.forEach((col, index) => {
      let update = {};
      if (updatedBoard.columns.length > index) {
        update = { ...updatedBoard.columns[index], name: col.title };
      } else {
        update = {
          name: col.title,
          id: `c${Math.random()}`,
          tasks: [],
        };
      }
      updatedColumns.push(update);
    });
    updatedBoard.columns = updatedColumns;
    return updatedBoard;
  };

  const onSubmit = (data) => {
    if (board) {
      const updatedBoard = createUpdatedBoard(board, data.name, data.columns);
      updateBoard(updatedBoard);
    } else {
      const newBoard = createBoard(data.name, data.columns);
      addBoard(newBoard);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <h2>
        <HeadingL>{title}</HeadingL>
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
      {board && (
        <p className="text-red text-sm">
          *Deleting a column will cause all its tasks and subtasks to be
          removed. If you removed one by mistake, please click outsidfe of the
          modal.
        </p>
      )}
      <ButtonPrimary type="submit" text={buttonText} />
    </form>
  );
}

export default AddBoard;
