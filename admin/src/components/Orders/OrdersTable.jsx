import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
// Icons
import { AiOutlineScan } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

import { MdRebaseEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { PiFilesBold } from "react-icons/pi";

import { TiExportOutline, TiPrinter } from "react-icons/ti";

import { LuBus, LuEdit } from "react-icons/lu";
import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, updateOrder } from "../../app/features/order/orderSlice";
import { Pagination } from "../Pagination";

const orderStatus = [
  { text: "قيد التنفيذ", value: "pending" },
  { text: "تم التنفيذ", value: "verified" },
  { text: "جاري التوصيل", value: "shipping" },
  { text: "تم التوصيل", value: "shipped" },
  { text: "ملغي", value: "cancel" },
];

const OrdersTable = () => {
  const [selectedOrder, setSelectedOrder] = useState([]);
  const { orders } = useSelector((state) => state.order);
  console.log(selectedOrder);
  const dispatch = useDispatch();
  const onUpdate = async (status) => {
    if (selectedOrder.length > 0) {
      await dispatch(updateOrder({ ids: selectedOrder, status }));
      setSelectedOrder([]);
    }
  };
  return (
    <>
      {/* Table */}
      {/* Head */}
      <div className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]">
        {/* Col */}
        <div className="col flex items-center gap-2">
          <div className="text flex items-center gap-1">
            <p className="my-1 font-semibold">الطلبات</p>
            <span className="text-xs mr-1 text-gray-500">
              ({orders.length} طلب)
            </span>
          </div>
        </div>
        {/* Col */}
        <div className="col">
          <Menu placement="bottom-end">
            <MenuHandler>
              <div className="border select-none border-purple-500 rounded-sm p-2 flex items-center gap-1 cursor-pointer text-xs">
                <MdRebaseEdit />
                تحرير سريع
              </div>
            </MenuHandler>
            <MenuList className="p-0">
              <MenuItem className="flex items-center justify-between py-3 gap-2">
                <Menu placement="right-start">
                  <MenuHandler>
                    <p className="flex items-center gap-2">
                      <LuEdit />
                      تعديل حالة الطلب
                    </p>
                  </MenuHandler>
                  <MenuList className="-mt-3 ml-2 py-1">
                    {orderStatus.map((st) => {
                      return (
                        <MenuItem
                          onClick={() => onUpdate(st.value)}
                          key={st.value}
                        >
                          {st.text}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <FiUsers />
                اسناد الى الموظفين
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <PiFilesBold />
                طباعة الفواتير
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <TiPrinter />
                طباعة ملخص الفواتير
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <AiOutlineScan />
                طباعة قوائم التجهيز
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <LuBus />
                طباعة البوليصات
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <TiExportOutline />
                تصدير الطلبات
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <AiOutlineDelete />
                حذف الطلب
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    onChange={(e) =>
                      e.target.checked
                        ? setSelectedOrder((prev) =>
                            orders
                              .filter((order) => order.status !== "cancel")
                              .map((order) => order.id)
                          )
                        : setSelectedOrder([])
                    }
                    disabled={orders.length < 1 ? true : false}
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                الاسم
              </th>
              <th scope="col" className="px-6 py-3">
                رقم الطلب
              </th>
              <th scope="col" className="px-6 py-3">
                الحاله
              </th>
              <th scope="col" className="px-6 py-3">
                الاجمالي
              </th>
              <th scope="col" className="px-6 py-3">
                التاريخ
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Col */}
            {orders.map((order) => {
              return (
                <OrderItem
                  key={order?.id}
                  order={order}
                  selectedOrder={selectedOrder}
                  setSelectedOrder={setSelectedOrder}
                />
              );
            })}
          </tbody>
        </table>
        {/* <Pagination
          from={from}
          to={to}
          current={current}
          action={(page) => dispatch(getOrders({ page: page }))}
        /> */}
      </div>
    </>
  );
};

export default OrdersTable;
