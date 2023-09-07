import React from "react";

function HeadingS({ children }) {
  return (
    <span className="text-mediumGray font-bold text-xs leading-tight tracking-[2.4px] uppercase">
      {children}
    </span>
  );
}

export default HeadingS;
