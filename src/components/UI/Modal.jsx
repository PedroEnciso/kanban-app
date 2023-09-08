import React from "react";

function Modal({ children, close }) {
  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4"
    >
      <div className="bg-white rounded-md p-6 max-w-[480px]">{children}</div>
    </div>
  );
}

export default Modal;
