import { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import BodyM from "../UI/Typography/BodyM";
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
      <label className="relative flex flex-col gap-2">
        <BodyM>Board Name</BodyM>
        <input
          type="text"
          placeholder="e.g. Web Design"
          className={`w-full py-2 px-4 dark:bg-darkGray border rounded font-medium text-sm leading-relaxed placeholder-black/25 dark:placeholder-white/25 ${
            errors.name
              ? "border-red"
              : "border-linesLight dark:border-linesDark"
          }`}
          {...register("name", { required: "Can't be empty." })}
        />
        {errors.name && (
          <p className="absolute top-8 right-4 text-red text-sm leading-relaxed">
            {errors.name.message}
          </p>
        )}
      </label>
      <div className="flex flex-col gap-2">
        <BodyM>Board Columns</BodyM>
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="flex gap-2">
              <label className="grow relative">
                <span className="sr-only">Column number {index}</span>
                <input
                  type="text"
                  {...register(`columns.${index}.title`, {
                    required: "Can't be empty.",
                  })}
                  placeholder="New Column"
                  className={`w-full py-2 px-4 dark:bg-darkGray border rounded font-medium text-sm leading-relaxed placeholder-black/25 dark:placeholder-white/25 ${
                    errors.columns &&
                    errors.columns.length > index &&
                    errors.columns[index]
                      ? "border-red"
                      : "border-linesLight dark:border-linesDark"
                  }`}
                />
                {errors.columns && errors.columns[index] && (
                  <p className="absolute top-1/2 right-4 translate-y-[-50%] text-red text-sm leading-relaxed">
                    {errors.columns[index].title.message}
                  </p>
                )}
              </label>
              <button type="button" onClick={() => remove(index)}>
                <svg
                  className="fill-mediumGray hover:fill-red transition-colors duration-200"
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fillRule="evenodd">
                    <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                    <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                  </g>
                </svg>
              </button>
            </div>
          );
        })}
        <ButtonPrimary
          type="button"
          buttonType="secondary"
          text="+Add New Column"
          onButtonClick={append}
        />
      </div>
      <ButtonPrimary type="submit" text="Create New Board" />
    </form>
  );
}

export default AddBoard;
