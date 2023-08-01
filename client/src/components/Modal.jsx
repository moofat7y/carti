import React from "react";
import { Card } from "@material-tailwind/react";
import ReactDOM from "react-dom";
import { useRef } from "react";
const Modal = ({ children, open, setOpen }) => {
  const modalRef = useRef();
  const handleBgClick = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    } else {
      setOpen(false);
    }
  };
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      onClick={(e) => handleBgClick(e)}
      className="fixed top-0 left-0 h-screen w-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
    >
      <div ref={modalRef} className="relative w-full max-w-md max-h-full">
        <Card>{children}</Card>
      </div>
    </div>,
    document.getElementById("models")
  );
};

export default Modal;
