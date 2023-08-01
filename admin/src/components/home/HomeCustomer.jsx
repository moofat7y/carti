import React from "react";
import profile from "/profile.png";

const HomeCustomer = ({ customer }) => {
  return (
    <tr className="bg-white bcustomer-b dark:bg-gray-800 dark:bcustomer-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 flex gap-3 items-center cursor-pointer">
        {/* CheackBox */}
        {/* Avatar */}
        <a href="#" className="img h-10 w-10 rounded-full overflow-hidden">
          <img
            src={
              customer.image
                ? `https://cartyi.com/storage/images/products/${customer.image}`
                : profile
            }
            alt={customer.name}
            loading="lazy"
          />
        </a>

        <div className="text-base text-blue-gray-500 hover:text-purple-700 font-normal">
          <span>{customer.name}</span>
        </div>
      </td>
      <td className="px-6 py-4">{customer.address ? customer.address : "_"}</td>
    </tr>
  );
};

export default HomeCustomer;
