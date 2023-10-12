import React from "react";

import BodyM from "../Typography/BodyM";
import ButtonPrimary from "../Buttons/ButtonPrimary";

function InputList({
  title,
  fields,
  errors,
  remove,
  append,
  register,
  fieldArrayName,
  placeholderName,
}) {
  return (
    <div className="flex flex-col gap-2">
      <BodyM>{title}</BodyM>
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2">
          <label className="grow relative">
            <span className="sr-only">Column number {index}</span>
            <input
              type="text"
              {...register(`${fieldArrayName}.${index}.title`, {
                required: "Can't be empty.",
              })}
              placeholder={field.placeholder || `New ${placeholderName}`}
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
          <button
            type="button"
            onClick={() => {
              console.log(`removing index ${index}`);
              remove(index);
            }}
          >
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
      ))}
      <ButtonPrimary
        type="button"
        buttonType="secondary"
        text="+Add New Column"
        onButtonClick={append}
      />
    </div>
  );
}

export default InputList;
