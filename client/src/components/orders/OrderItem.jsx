import React from "react";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ order }) => {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate("/orders/tracking", { state: { order } })}
      className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="w-28 p-4">{order.id}</td>
      <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
        {order.shipping_address}
      </td>
      <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
        {order.status}
      </td>
      <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
        {new Date(order.created_at).toLocaleDateString()}
      </td>
      <td className="px-6 py-2">{order.total_price} ج.م</td>
    </tr>
  );
};

export default OrderItem;
