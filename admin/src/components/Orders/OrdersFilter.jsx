import React, { useState } from "react";
import { ordersData } from "../../utils/helpers";

const OrdersFilter = () => {
  const [filter, setFilter] = useState(null);
  return (
    // <div className="w-full ">
    <div className="row-scr flex gap-2 overflow-x-auto snap-mandatory snap-x select-none ">
      {ordersData.map(({ id, icon, title, number, dotColor }) => {
        return (
          <div className="col snap-start" key={id}>
            <div
              onClick={() => setFilter(id)}
              className={`block p-2 pr-5 cursor-pointer border rounded-lg text-blue-gray-700 duration-300 w-[165px] h-[90px] ${
                filter === id ? "bg-purple-200" : ""
              }`}
            >
              <div className="icon "> {icon} </div>
              <div className="flex relative justify-between items-center gap-3 mt-5 text-xs font-medium">
                <h2 className="my-1">{title}</h2>
                <span className="text-sm">{number}</span>
                <span
                  className={`dot ${dotColor} absolute -right-[14px] h-[8px] w-[8px] top-[50%] -translate-y-[50%] rounded-full`}
                ></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default OrdersFilter;
