import React from "react";

function Input({ name = "", type = "text", placeholder = "", register }) {
  const classes =
    "w-full py-2 px-4 dark:bg-darkGray border border-linesLight dark:border-linesDark rounded font-medium text-sm leading-relaxed placeholder-black/25 dark:placeholder-white/25";

  if (type === "textarea") {
    return (
      <textarea
        className={classes}
        name={name}
        id=""
        cols="30"
        rows="4"
        placeholder={placeholder}
        {...register(name)}
      ></textarea>
    );
  }
  return (
    <input
      className={classes}
      name={name}
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input;
