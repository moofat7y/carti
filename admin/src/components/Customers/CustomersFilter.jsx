import React, { useState } from "react";
import { clientsFilters } from "../../utils/helpers";

const CustomersFilter = () => {
  const [filter, setFilter] = useState(null);
  return (
    <div className="row grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 px-4">
      {clientsFilters.map(({ id, icon, title, number }) => {
        return (
          <div className="col" key={id}>
            <div
              onClick={() => setFilter(id)}
              className={`block text-center py-8 border rounded-lg text-gray-500 hover:text-purple-900 duration-300 ${
                filter === id ? "bg-purple-200" : ""
              }`}
            >
              <div className="icon"> {icon} </div>
              <h2 className="my-1 text-sm font-semibold">{title}</h2>
              <span className="text-sm text-gray-400">{number}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomersFilter;
