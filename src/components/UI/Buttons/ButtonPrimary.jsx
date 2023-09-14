import React from "react";

function ButtonPrimary({
  text,
  onButtonClick,
  type = "",
  buttonType = "primary",
}) {
  let colors = "text-white bg-mainPurple hover:bg-mainPurpleHover";

  if (buttonType === "secondary") {
    colors =
      "text-mainPurple bg-mainPurple/10 hover:bg-mainPurpleHover/25 dark:bg-white dark:hover:bg-mainPurple/10";
  }

  if (buttonType === "destructive") {
    colors = "text-white bg-red hover:bg-redHover";
  }
  return (
    <button
      className={`w-full py-2 font-bold text-sm ${colors} leading-relaxed rounded-full pointer transition-colors duration-300`}
      type={type}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
