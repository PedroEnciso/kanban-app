import React from "react";

function BodyM({ children, extraClasses }) {
  let classes = `${extraClasses} font-bold text-xs leading-tight`;

  return <p className={classes}>{children}</p>;
}

export default BodyM;
