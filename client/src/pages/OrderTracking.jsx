import React from "react";
import { Link, useLocation } from "react-router-dom";
import { orderStatus } from "../utils/helpers";

const status = "done";

const breadcrumbs = [
  { text: "المتجر", href: "/store" },
  { text: "الطلبات", href: "/orders" },
  { text: "متابعة", href: "/orders/tracking" },
];
const OrderTracking = () => {
  const { state } = useLocation();
  const activeStatusIndex = orderStatus.findIndex(
    (st) => st.status === state.order.status
  );

  return (
    <section className="py-4">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-center mb-4"
          >
            {breadcrumbs.map((crumb, index) => {
              if (index === breadcrumbs.length - 1) {
                return (
                  <li key={index} className="text-sm">
                    <Link
                      to={crumb.href}
                      aria-current="page"
                      className="font-medium  hover:text-gray-600"
                    >
                      {crumb.text}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <div className="flex items-center">
                    <Link
                      to={crumb.href}
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      {crumb.text}
                    </Link>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
        <h3 className="font-semibold text-2xl text-center mb-10">متابعة</h3>
        <ol className="flex justify-center items-center mx-auto max-w-min">
          {orderStatus.map(({ icon, status }, index) => {
            if (orderStatus.length - 1 === index) {
              return (
                <li key={status} className="flex items-center w-full">
                  <span
                    className={`flex items-center justify-center w-10 h-10 ${
                      activeStatusIndex === index
                        ? "bg-purple-500 text-white"
                        : "bg-gray-100"
                    }  rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}
                  >
                    {icon}
                  </span>
                </li>
              );
            }
            return (
              <li
                key={status}
                className={`flex w-full items-center ${
                  activeStatusIndex < index
                    ? ""
                    : "text-purple-600 dark:text-purple-500 after:border-purple-100"
                }  after:content-[''] after:w-[20%] after:min-w-[45px] after:h-1 after:border-b  after:border-4 after:inline-block dark:after:border-purple-800`}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10  ${
                    activeStatusIndex < index ? "bg-gray-100" : "bg-purple-100"
                  }   rounded-full lg:h-12 lg:w-12 dark:bg-purple-800 shrink-0`}
                >
                  {icon}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-10">
          <div className="relative overflow-x-auto">
            <table className="w-[60%] min-w-[280px] mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 text-center uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    اسم المنتج
                  </th>
                  <th scope="col" className="px-6 py-3">
                    السعر
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    الكميه
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    تاريخ الطلب
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.order.items.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white dark:bg-gray-800 text-center"
                    >
                      <th
                        scope="row"
                        className={`px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white`}
                      >
                        {item.product_id.name}
                      </th>
                      <td className="px-6 py-4">{item.product_id.price} ج.م</td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">
                        {new Date(state.order.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
