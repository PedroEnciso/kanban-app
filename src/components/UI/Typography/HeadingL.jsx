import React from "react";

function HeadingL({ color = "", children }) {
  return (
    <span className={`${color} font-bold text-lg leading-[1.28]`}>
      {children}
    </span>
  );
}

export default HeadingL;
