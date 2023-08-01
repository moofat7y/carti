import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { MdRebaseEdit } from "react-icons/md";
import { AiOutlineDelete, AiOutlineUsergroupDelete } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import CustomerItem from "./CustomerItem";

import { Pagination } from "../Pagination";
import {
  deleteCustomer,
  getCustomers,
} from "../../app/features/Customers/customersSlice";
const CustomerTable = () => {
  const [selectedCustomer, setselectedCustomer] = useState([]);
  const { customers, from, to, current } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();
  const onSubmit = async () => {
    if (selectedCustomer.length > 0) {
      await dispatch(deleteCustomer({ ids: selectedCustomer }));
      setselectedCustomer([]);
    }
  };

  return (
    <>
      <div className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]">
        {/* Col */}
        <div className="col flex items-center gap-2">
          <div className="text flex items-center gap-1">
            <AiOutlineUsergroupDelete className="mx-auto text-gray-700 text-2xl" />
            <p className="my-1 font-semibold">العملاء</p>
            <span className="text-xs mr-1 text-gray-500">
              ({customers.length} عميل)
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
              <MenuItem className="flex items-center py-3 gap-2">
                <GrFormAdd />
                اضافة الى مجموعة
              </MenuItem>
              <MenuItem
                onClick={() => onSubmit()}
                className="flex items-center py-3 gap-2"
              >
                <AiOutlineDelete />
                حذف من مجموعة
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    onChange={(e) =>
                      e.target.checked
                        ? setselectedCustomer((prev) =>
                            customers.map((customer) => customer.id)
                          )
                        : setselectedCustomer([])
                    }
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>

              <th scope="col" className="px-6 py-3">
                اسم العميل
              </th>
              <th scope="col" className="px-6 py-3">
                البريد الالكتروني
              </th>
              <th scope="col" className="px-6 py-3">
                رقم الهاتف
              </th>
              <th scope="col" className="px-6 py-3">
                التاريخ
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <CustomerItem
                  key={customer.id}
                  customer={customer}
                  setSelectedCustomer={setselectedCustomer}
                  selectedCustomer={selectedCustomer}
                />
              );
            })}
          </tbody>
        </table>

        <Pagination
          from={from}
          to={to}
          current={current}
          action={(page) => dispatch(getCustomers({ page: page }))}
        />
      </div>
    </>
  );
};

export default CustomerTable;
