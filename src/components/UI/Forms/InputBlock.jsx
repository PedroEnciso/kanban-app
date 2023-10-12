import React from "react";

import BodyM from "../Typography/BodyM";

function InputBlock({
  label,
  registerName,
  register,
  errors,
  errorMessage,
  placeholder,
  type = "input",
  defaultValue = "",
}) {
  const classes = `w-full py-2 px-4 dark:bg-darkGray border rounded font-medium text-sm leading-relaxed placeholder-black/25 dark:placeholder-white/25 ${
    errors ? "border-red" : "border-linesLight dark:border-linesDark"
  }`;

  let input = (
    <input
      defaultValue={defaultValue}
      type="text"
      placeholder={placeholder}
      className={classes}
      {...register(registerName, { required: errorMessage })}
    />
  );

  if (type === "textarea") {
    input = (
      <textarea
        defaultValue={defaultValue}
        cols="30"
        rows="4"
        placeholder={placeholder}
        className={classes}
        {...register(registerName)}
      ></textarea>
    );
  }

  return (
    <label className="relative flex flex-col gap-2">
      <BodyM>{label}</BodyM>
      {input}
      {errors && (
        <p className="absolute top-8 right-4 text-red text-sm leading-relaxed">
          {errors.message}
        </p>
      )}
    </label>
  );
}

export default InputBlock;
