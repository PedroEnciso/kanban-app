import React from "react";

function Select({
  defaultValue = "",
  optionList,
  register = null,
  name,
  onStatusChange = null,
}) {
  return (
    <>
      <select
        name={name}
        id=""
        defaultValue={defaultValue}
        className="w-full px-4 py-2 dark:bg-darkGray border border-linesLight dark:border-linesDark rounded text-[13px] leading-relaxed appearance-none select"
        {...register(name)}
      >
        {optionList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
