import React, { Fragment, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ReusebleDrawer({
  open,
  onClose,
  title,
  children,
  placement,
}) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) {
      setShow(open);
      return;
    }
    setTimeout(() => {
      setShow(false);
    }, 300);
  }, [open]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <Drawer placement={placement} open={open} onClose={onClose} className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <XMarkIcon strokeWidth={2} className="h-5 w-5" />
        </IconButton>
      </div>
      <Fragment>{children}</Fragment>
    </Drawer>,
    document.getElementById("models")
  );
}
