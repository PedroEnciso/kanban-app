import { useContext, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import BodyM from "../UI/Typography/BodyM";
import FormBlock from "../UI/Forms/FormBlock";
import AddSubtasks from "../Subtasks/AddSubtasks";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";

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
      const newColumn = {
        id: `c${Math.random()}`,
        name: col.title,
        tasks: [],
      };
      newBoard.columns.push(newColumn);
    });
    return newBoard;
  };

  const onSubmit = (data) => {
    console.log("submiting new board", data);
    console.log(data.columns[0]);
    const newBoard = createBoard(data.name, data.columns);
    // addBoard(newBoard);
    // onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <h2>
        <HeadingL>Add New Board</HeadingL>
      </h2>
      <FormBlock
        name="name"
        label="Board Name"
        type="text"
        placeholder="e.g. Web Design"
        register={register}
      />
      {/* <AddSubtasks type="BOARD" register={register} prevSubtasks={fields} /> */}
      <div className="flex flex-col gap-2">
        <BodyM>Board Columns</BodyM>
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="flex gap-2">
              <label className="grow">
                <span className="sr-only">Column number {index}</span>
                <input
                  type="text"
                  {...register(`columns.${index}.title`)}
                  placeholder="New Column"
                  className="w-full py-2 px-4 dark:bg-darkGray border border-linesLight dark:border-linesDark rounded font-medium text-sm leading-relaxed placeholder-black/25 dark:placeholder-white/25"
                />
              </label>
              <button type="button" onClick={() => remove(index)}>
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#828FA3" fillRule="evenodd">
                    <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                    <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                  </g>
                </svg>
              </button>
            </div>
          );
        })}
        <button
          type="button"
          onClick={append}
          className="text-mainPurple bg-mainPurple/10 hover:bg-mainPurpleHover/25 dark:bg-white dark:hover:bg-mainPurple/10 w-full py-2 font-bold text-sm ${colors} leading-relaxed rounded-full pointer transition-colors duration-300"
        >
          +Add New Column
        </button>
      </div>
      <ButtonPrimary type="submit" text="Create New Board" />
    </form>
  );
}

export default AddBoard;
