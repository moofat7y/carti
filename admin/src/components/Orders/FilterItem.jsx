import React from "react";

const FilterItem = ({ item }) => {
  return (
    <div className="col">
      <a className="block p-2 pr-5 cursor-pointer border rounded-lg text-blue-gray-700 duration-300 w-[165px] h-[90px]">
        <div className="icon"> {item.icon} </div>
        <div className="flex relative justify-between items-center gap-3 mt-5 text-xs font-medium">
          <h2 className="my-1">{item.title}</h2>
          <span className="text-sm">{item.number}</span>
          <span
            className={`dot ${dotColor} absolute -right-[14px] h-[8px] w-[8px] top-[50%] -translate-y-[50%] rounded-full`}
          ></span>
        </div>
      </a>
    </div>
  );
};

export default FilterItem;
