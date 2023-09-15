import React from "react";

function BodyM({
  children,
  extraClasses = "",
  textColor = "text-mediumGray dark:text-white",
}) {
  let classes = `${extraClasses} ${textColor} font-bold text-xs leading-tight`;

  return <p className={classes}>{children}</p>;
}

export default BodyM;
