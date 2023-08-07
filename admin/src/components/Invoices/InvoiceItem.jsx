import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { deleteInvoice } from "../../app/features/invoices/invoiceSlice";
import profile from "/profile.png";
const InvoiceItem = ({ invoice, setSelectedInvoice, selectedInvoice }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const onDelete = async () => {
  //   setIsLoading(true);
  //   await dispatch(deleteInvoice({ ids: [invoice.id] }));
  //   setIsLoading(false);
  // };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="flex gap-2 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <Link to={`/orders/order-details/${invoice.order_id}`}>
            #{invoice.invoice_number}
          </Link>
        </td>
        <td className="px-6 min-w-[150px] py-4">{invoice.tax} %</td>
        <td className="px-6  py-4">{invoice.subtotal} ج.م</td>
        <td className="px-6  py-4">{invoice.total} ج.م</td>

        <td className="px-6  py-4">
          {new Date(invoice.invoice_date).toLocaleDateString()}
        </td>
      </tr>
    </>
  );
};

export default InvoiceItem;
