import React from "react";

// Icons
import HomeCustomer from "./HomeCustomer";
import { useSelector } from "react-redux";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

const HomeClient = () => {
  const { customers } = useSelector((state) => state.customer);
  return (
    <>
      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* Head */}
        <div className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]">
          {/* Col */}
          <div className="col flex items-center gap-2">
            <div className="text flex items-center gap-1">
              <AiOutlineUsergroupDelete className="mx-auto text-gray-700 text-2xl" />
              <p className="my-1 font-semibold">أحدث العملاء</p>
            </div>
          </div>
          {/* Col */}
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
          <tbody>
            {/* Col */}
            {customers.slice(0, 5).map((customer) => {
              return <HomeCustomer key={customer.id} customer={customer} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeClient;
