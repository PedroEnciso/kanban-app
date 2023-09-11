import React from "react";

function BodyM({ children, lineThrough, color }) {
  let classes = "text-mediumGray font-bold text-xs leading-tight";

  if (color) {
    classes = `text-${color} font-bold text-xs leading-tight`;
  }

  if (lineThrough) {
    classes = `${classes} line-through`;
  }

  return <p className={classes}>{children}</p>;
}

export default BodyM;
