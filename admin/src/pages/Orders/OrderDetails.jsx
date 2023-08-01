// ---------------
// img
import profile from "/public/profile.png";
// import img from "../../../public/card.jpg";

// icons
import { PiUsersThreeLight, PiHashThin, PiTShirtThin } from "react-icons/pi";
import { BsCalendarDate, BsFlag, BsPrinter, BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall, BiUser } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
// -----------------

import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { IconButton, Spinner } from "@material-tailwind/react";
import api from "../../utils/api";

const OrderDetails = () => {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState(state?.order ? state.order : null);
  const { id } = useParams();
  // console.log(order);

  console.log(order);
  useEffect(() => {
    const fetchOrder = async (id) => {
      setIsLoading(true);
      const res = await api.get(`/orders/${id}`);
      console.log(res);
      setOrder(res.data[0][0]);
      setIsLoading(false);
    };
    if (!order) {
      fetchOrder(id);
      return;
    }
  }, []);

  const printElement = (elementId) => {
    const element = document.getElementById(elementId);
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = element.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <>
      {isLoading || !order ? (
        <div className="h-[80vh] flex items-center justify-center">
          <Spinner color="purple" className="h-8 w-8" />
        </div>
      ) : (
        <div className="container">
          {/* Start Header */}
          <BreadCrumbs
            links={[
              { text: "الطلبات", href: "/orders" },
              {
                text: `${order.invoices.invoice_number}#`,
                href: "/orders/detailsOrder",
              },
            ]}
          />
          {/* End Header */}
          {/* Employee data */}
          <div className="employee-data mt-8 rounded-lg overflow-hidden border">
            {/* Head */}
            <div className="head flex items-center gap-3 bg-gray-50 p-3 text-gray-700 font-semibold">
              <PiUsersThreeLight className="text-xl font-bold" />
              <h2>تفاصيل الطلب</h2>
            </div>
            {/* Data */}
            <div className="data flex flex-col md:flex-row justify-between p-4 gap-8">
              <div className="num text-center">
                <span className="flex items-center gap-2 mb-2 text-gray-400 text-sm font-medium justify-center">
                  <PiHashThin />
                  رقم الطلب
                </span>
                <p className="text-gray-800">{order.invoices.invoice_number}</p>
              </div>
              <div className="date text-center">
                <span className="flex items-center gap-2 mb-2 text-gray-400 text-sm font-medium justify-center">
                  <BsCalendarDate />
                  تاريخ الطلب
                </span>
                <p className="text-gray-800">
                  {new Date(order.created_at).toDateString()}
                </p>
              </div>
              <div className="state text-center">
                <span className="flex items-center gap-2 mb-2 text-gray-400 text-sm font-medium justify-center">
                  <BsFlag />
                  حالة الطلب
                </span>
                <p className="text-gray-800">{order.status}</p>
              </div>
            </div>
          </div>
          <div className="row lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
            {/* Client Data */}
            <div className="client-data mt-8 rounded-lg overflow-hidden border">
              {/* Head */}
              <div className="head flex items-center gap-3 bg-gray-50 p-3 text-gray-700 font-semibold">
                <BiUser className="text-xl font-bold" />
                <h2>العميل</h2>
              </div>
              {/* Data */}
              <div className="data flex flex-col md:flex-row px-7 py-4 gap-8">
                {/* <div className="flex gap-5"> */}
                <div className="img h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={
                      order?.user?.image
                        ? `https://cartyi.com/storage/images/products/${order.user.image}`
                        : profile
                    }
                    alt="profile-img"
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
                <div className="text text-purple-900">
                  <h2 className="name mb-2">{order?.user?.name}</h2>
                  <div className="call mb-2">{order?.user?.phone}</div>
                  <div className="contact flex gap-2 ">
                    <a
                      href={`https://wa.me/+${order?.user?.phone}`}
                      target="_blank"
                    >
                      <IconButton variant="filled" color="green">
                        <BsWhatsapp className="text-white text-md" />
                      </IconButton>
                    </a>
                    <a
                      href={`mailto:${order?.user?.email}`}
                      className="flex gap-2 items-center"
                      target="_blank"
                    >
                      <IconButton variant="filled" color="red">
                        <MdOutlineMail className="text-white" />
                      </IconButton>
                    </a>
                    <a
                      href={`tel:+${order?.user?.phone}`}
                      className="flex gap-2 items-center"
                      target="_blank"
                    >
                      <IconButton variant="filled" color="blue">
                        <BiPhoneCall className="text-white" />
                      </IconButton>
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            {/* Product Data */}
            <div className="products-data xl:col-span-2">
              <div className="mt-8 rounded-lg overflow-x-auto border">
                {/* Head */}
                <div className="head flex items-center gap-3 bg-gray-50 p-3 text-gray-700 font-semibold">
                  <PiTShirtThin className="text-xl font-bold" />
                  <h2>المنتجات</h2>
                </div>
                {/* Data Table */}
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
                              <Link to="#" className="w-fit">
                                {/* <img className="w-10 h-10 rounded-full" src={img} alt="Jese image" loading="lazy"/> */}
                              </Link>
                              <Link to="#" className="w-fit">
                                <div className="">
                                  <div className="text-sm font-semibold text-purple-700 hover:text-purple-600">
                                    {item.product_id.name}
                                  </div>
                                </div>
                              </Link>
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
              </div>
              {/* Print */}
              <Link
                to={`/print/${order.id}`}
                target="_blank"
                className="print mt-3 flex items-center gap-2 py-3 px-6 border w-fit rounded-md mx-auto bg-gray-100 text-gray-600 duration-300 hover:border-gray-400"
              >
                <BsPrinter />
                طباعة
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
