import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { orderStatusColors } from "../../utils/helpers";

const OrderItem = ({ order, selectedOrder, setSelectedOrder }) => {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() =>
        navigate(`/orders/order-details/${order?.id}`, { state: { order } })
      }
      className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id={order?.id}
            disabled={order?.status === "cancel"}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) =>
              e.target.checked
                ? setSelectedOrder((prev) => [...prev, +e.target.id])
                : setSelectedOrder((prev) =>
                    prev.filter((order) => order !== +e.target.id)
                  )
            }
            type="checkbox"
            checked={
              selectedOrder.findIndex((od) => od === order?.id) >= 0
                ? true
                : false
            }
            className="w-4 h-4 text-blue-600 bg-gray-100 bproduct-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bproduct-gray-600 cursor-pointer"
          />
          <label htmlFor={order?.id} className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      <td className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <div className="pl-3 ">
          <div className="text-md font-semibold">{order?.user.name}</div>
        </div>
      </td>

      <td className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <div className="pl-3 ">
          <div className="text-md font-semibold">#{order?.id}</div>
        </div>
      </td>
      <td className="px-6 min-w-[150px] py-4">
        {order?.status}
        <span
          className={`w-2 h-2 rounded-full mr-2 inline-block ${
            orderStatusColors[order?.status]
          }`}
        ></span>
      </td>
      <td className="px-6  py-4">{order?.total_price} ج.م</td>
      <td className="px-6  py-4">
        {new Date(order?.created_at).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default OrderItem;
