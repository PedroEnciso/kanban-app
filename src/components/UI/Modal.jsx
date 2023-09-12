import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onModalClose }) {
  // add a key listener to component only while mounted
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, []);

  // trap the user's tab focus inside the modal
  const modalRef = useRef();
  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  // map escape to close the modal and tab key to move through focusable elements
  const keyListenersMap = new Map([
    [27, onModalClose],
    [9, handleTabKey],
  ]);

  return createPortal(
    <div
      onClick={onModalClose}
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-md p-6 max-w-[480px]" ref={modalRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
