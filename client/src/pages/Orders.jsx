import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "../components/orders/OrderItem";
const Orders = () => {
  const { orders } = useSelector((state) => state.order);

  return (
    <div className="container min-h-[80vh] flex flex-col justify-center">
      {orders.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className="">رقم الطلب</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  عنوان التوصيل
                </th>
                <th scope="col" className="px-6 py-3">
                  حالة الطلب
                </th>

                <th scope="col" className="px-6 py-3">
                  تاريخ الانشاء
                </th>

                <th scope="col" className="px-6 py-3">
                  المبلغ الكلي
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return <OrderItem key={order.id} order={order} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h4 className="text-center">لا توجد طلبات</h4>
      )}
    </div>
  );
};

export default Orders;
