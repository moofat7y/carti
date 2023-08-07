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
import InvoiceItem from "./InvoiceItem";

import { Pagination } from "../Pagination";
import {
  // deleteInvoice,
  getInvoices,
} from "../../app/features/invoices/invoiceSlice";
const InvoicesTable = () => {
  const [selectedInvoice, setselectedInvoice] = useState([]);
  const { invoices, from, to, current } = useSelector((state) => state.invoice);
  const dispatch = useDispatch();
  // const onSubmit = async () => {
  //   if (selectedInvoice.length > 0) {
  //     await dispatch(deleteInvoice({ ids: selectedInvoice }));
  //     setselectedInvoice([]);
  //   }
  // };

  return (
    <>
      <div className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]">
        {/* Col */}
        <div className="col flex items-center gap-2">
          <div className="text flex items-center gap-1">
            <AiOutlineUsergroupDelete className="mx-auto text-gray-700 text-2xl" />
            <p className="my-1 font-semibold">التقارير</p>
            <span className="text-xs mr-1 text-gray-500">
              ({invoices.length} تقرير)
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
              <th scope="col" className="px-6 py-3">
                رقم الفاتوره
              </th>
              <th scope="col" className="px-6 py-3">
                الضريبه
              </th>
              <th scope="col" className="px-6 py-3">
                المجموع الفرعي
              </th>
              <th scope="col" className="px-6 py-3">
                المجموع الكلي
              </th>
              <th scope="col" className="px-6 py-3">
                التاريخ
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => {
              return (
                <InvoiceItem
                  key={invoice.id}
                  invoice={invoice}
                  setSelectedInvoice={setselectedInvoice}
                  selectedInvoice={selectedInvoice}
                />
              );
            })}
          </tbody>
        </table>

        <Pagination
          from={from}
          to={to}
          current={current}
          action={(page) => dispatch(getInvoices({ page: page }))}
        />
      </div>
    </>
  );
};

export default InvoicesTable;
