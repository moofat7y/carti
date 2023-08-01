import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCustomer } from "../../app/features/customers/customersSlice";
import profile from "/profile.png";
const CustomerItem = ({ customer, setSelectedCustomer, selectedCustomer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteCustomer({ ids: [customer.id] }));
    setIsLoading(false);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id={customer.id}
              onChange={(e) =>
                e.target.checked
                  ? setSelectedCustomer((prev) => [...prev, +e.target.id])
                  : setSelectedCustomer((prev) =>
                      prev.filter((customer) => customer !== +e.target.id)
                    )
              }
              type="checkbox"
              checked={
                selectedCustomer.findIndex((od) => od === customer.id) >= 0
                  ? true
                  : false
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 bcustomer-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bcustomer-gray-600 cursor-pointer"
            />
            <label htmlFor={customer.id} className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <td className="flex gap-2 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img
            className="w-10 h-10 rounded-md object-contain"
            loading="lazy"
            src={
              customer.image
                ? `https://cartyi.com/storage/images/customers/${customer.image}`
                : profile
            }
            alt={customer.name}
          />
          <div className="">
            <div className="text-sm font-semibold">{customer.name}</div>
            <div className="text-sm">{customer.id}#</div>
          </div>
        </td>

        <td className="px-6 min-w-[150px] py-4">{customer.email}</td>
        <td className="px-6  py-4">{customer.phone}</td>
        <td className="px-6  py-4">
          {new Date(customer.created_at).toLocaleDateString()}
        </td>
      </tr>
    </>
  );
};

export default CustomerItem;
