import React, { useState } from "react";

import HomeOrderItem from "./HomeOrderItem";
import { useSelector } from "react-redux";

const HomeOrder = () => {
  const { orders } = useSelector((state) => state.order);
  return (
    <>
      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        {/* Head */}
        <div className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]">
          {/* Col */}
          <div className="col flex items-center gap-2">
            <div className="text flex items-center gap-1">
              <p className="my-1 font-semibold">أحدث الطلبات</p>
            </div>
          </div>
          {/* Col */}
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
          <tbody>
            {/* Col */}
            {orders.slice(0, 5).map((order) => {
              return <HomeOrderItem key={order.id} order={order} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeOrder;
