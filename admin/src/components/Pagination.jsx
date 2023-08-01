import React, { useEffect } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ from, to, current, action }) {
  const [active, setActive] = React.useState(1);
  const next = () => {
    if (active === to) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  useEffect(() => {
    if (active !== current) {
      action(active);
    }
  }, [active]);

  if (from === to || from === null) {
    return;
  }
  return (
    <nav
      className="flex items-center justify-center py-2"
      aria-label="Table navigation"
    >
      <div className="flex items-center gap-8 flex-row-reverse ">
        <IconButton
          size="sm"
          variant="outlined"
          color="blue-gray"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal">
          Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
          <strong className="text-blue-gray-900">{to}</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          color="blue-gray"
          onClick={next}
          disabled={active === to}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </nav>
  );
}
