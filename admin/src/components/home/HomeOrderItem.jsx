import React from "react";

const HomeOrderItem = ({ order }) => {
  console.log(order);
  return (
    <tr
      key={order.id}
      className="bg-white border-b flex justify-between items-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
    >
      <td className="p-4 flex gap-3 items-center cursor-pointer">
        {/* CheackBox */}
        {/* Avatar */}

        {/* Name */}
        <div className="text-base text-[#444D61] font-normal">
          {/* <a href="#" className="block text-right"> */}
          {order.user.name}
          <div className="text-xs flex gap-4 text-gray-500 mt-1">
            <span className="text">{order.text}</span>
          </div>
          {/* </a> */}
        </div>
      </td>
      <td className="px-6 py-4">{order.status}</td>
      <td className="px-6 py-4">
        <div className="flex gap-16">
          <span className="price font-medium text-base text-[#174995]">
            {order.total_price} ج.م
          </span>
          <p>{new Date(order.created_at).toLocaleDateString()}</p>
        </div>
      </td>
    </tr>
  );
};

export default HomeOrderItem;
