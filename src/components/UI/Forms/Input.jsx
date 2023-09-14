import React from "react";

function Input({ name = "", type = "text", placeholder = "", value = "" }) {
  const classes =
    "w-full py-2 px-4 border border-mediumGray/25 rounded font-medium text-sm leading-relaxed placeholder-black/25";

  if (type === "textarea") {
    return (
      <textarea
        className={classes}
        name={name}
        id=""
        cols="30"
        rows="4"
        placeholder={placeholder}
        value={value}
      ></textarea>
    );
  }
  return (
    <input
      className={classes}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;