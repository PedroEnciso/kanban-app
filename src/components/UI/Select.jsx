import React from "react";

function Select({ defaultValue, optionList }) {
  return (
    <>
      <select
        name="current-status"
        id=""
        defaultValue={defaultValue}
        className="w-full px-4 py-2 dark:bg-darkGray border border-mediumGray/25 rounded text-[13px] leading-relaxed appearance-none select"
      >
        {optionList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
