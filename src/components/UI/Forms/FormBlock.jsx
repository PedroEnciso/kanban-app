import React from "react";

import BodyM from "../Typography/BodyM";
import Input from "./Input";

function InputBlock({
  name,
  label,
  type,
  placeholder,
  inputType = "input",
  register,
  defaultValue = "",
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>
        <BodyM>{label}</BodyM>
      </label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        inputType={inputType}
        register={register}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default InputBlock;
