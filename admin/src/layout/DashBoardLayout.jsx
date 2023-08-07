import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../app/features/categories/categorySlice";
import { getProducts } from "../app/features/product/productSlice";
import { getOrders } from "../app/features/order/orderSlice";
import { getInvoices } from "../app/features/invoices/invoiceSlice";
import { getCustomers } from "../app/features/customers/customersSlice";
import { getUserSetting } from "../app/features/setting/settingSlice";
import { getReports } from "../app/features/reports/reportSlice";
import AddReport from "../components/Reports/AddReport";
import { getStatistics } from "../app/features/statistics/statSlice";

export default function DashBoardLayout() {
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getStatistics());
      dispatch(getCategories({ page: 1 }));
      dispatch(getProducts({ page: 1 }));
      dispatch(getOrders({ page: 1 }));
      dispatch(getInvoices({ page: 1 }));
      dispatch(getCustomers({ page: 1 }));
      dispatch(getReports({ page: 1 }));
      dispatch(getUserSetting({ id: user.id }));
    }
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div className="main min-h-screen w-full md:w-[75%] xl:w-[85%] pb-4">
        <Header />
        <Outlet />
      </div>
      <div className="fixed left-5 bottom-5">
        <AddReport />
      </div>
    </div>
  );
}
