import React from "react";

import BodyM from "../Typography/BodyM";

function InputBlock({
  label,
  registerName,
  register,
  errors,
  errorMessage,
  placeholder,
}) {
  return (
    <label className="relative flex flex-col gap-2">
      <BodyM>{label}</BodyM>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full py-2 px-4 dark:bg-darkGray border rounded font-medium text-sm leading-relaxed placeholder-black/25 dark:placeholder-white/25 ${
          errors ? "border-red" : "border-linesLight dark:border-linesDark"
        }`}
        {...register(registerName, { required: errorMessage })}
      />
      {errors && (
        <p className="absolute top-8 right-4 text-red text-sm leading-relaxed">
          {errors.message}
        </p>
      )}
    </label>
  );
}

export default InputBlock;
