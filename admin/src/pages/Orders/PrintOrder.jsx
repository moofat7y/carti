// ----------------------

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { Spinner } from "@material-tailwind/react";

const PrintOrder = () => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const fetchOrder = async (id) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/orders/${id}`);
      console.log(response);
      setOrder(response.data[0][0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchOrder(id);
    }
  }, []);

  useEffect(() => {
    if (order) {
      window.print();
    }
  }, [order]);
  return (
    <>
      {isLoading && !order ? (
        <div className="h-[8vh] flex items-center justify-center">
          <Spinner color="purple"></Spinner>
        </div>
      ) : order ? (
        <div className="data-table flex flex-col md:flex-row justify-between p-4 gap-8">
          <table
            id="invoice-table"
            className="w-full text-sm text-gray-500 text-right"
          >
            <thead className="text-xs text-gray-700">
              <tr>
                <th scope="col" className="px-3 py-3">
                  المنتج
                </th>
                <th scope="col" className="px-3 py-3">
                  الكمية
                </th>

                <th scope="col" className="px-3 py-3">
                  السعر
                </th>
                <th scope="col" className="px-3 py-3">
                  المجموع
                </th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="flex items-center gap-3 px-3 py-4 text-gray-900 whitespace-nowrap"
                    >
                      {/* <Link to="#" className="w-fit"> */}
                      <div className="">
                        <div className="text-sm font-semibold text-purple-700 hover:text-purple-600">
                          {item.product_id.name}
                        </div>
                      </div>
                      {/* </Link> */}
                    </th>
                    <td className="px-3 py-4 font-semibold text-gray-400 text-right">
                      {item.quantity}
                    </td>
                    <td className="px-3 py-4 text-gray-400">
                      {item.product_id.price} ج.م
                    </td>
                    <td className="px-3 py-4 font-medium text-purple-700">
                      {item.quantity * item.product_id.price} ج.م
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  className="px-3 py-2 font-semibold text-gray-400 text-right"
                  colSpan="3"
                >
                  المجموع الفرعي
                </td>
                <td className="px-3 py-2 font-semibold text-gray-400 text-right">
                  {order.invoices.subtotal} ج.م
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  className="px-3 py-2 font-semibold text-gray-400 text-right"
                  colSpan="3"
                >
                  الضريبه
                </td>
                <td className="px-3 py-2 font-semibold text-gray-400 text-right">
                  {order.invoices.tax} %
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  className="px-3 py-2 font-semibold text-gray-400 text-right"
                  colSpan="3"
                >
                  المجموع الكلي
                </td>
                <td className="px-3 py-2 font-semibold text-gray-400 text-right">
                  {order.invoices.total} ج.م
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PrintOrder;
