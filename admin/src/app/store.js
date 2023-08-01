import { configureStore } from "@reduxjs/toolkit";

import userRed from "./features/user/userSlice";
import categoryRed from "./features/categories/categorySlice";
import productRed from "./features/product/productSlice";
import orderRed from "./features/order/orderSlice";
import invoiceRed from "./features/invoices/invoiceSlice";
import settingRed from "./features/setting/settingSlice";
import reportRed from "./features/reports/reportSlice";
import customersSlice from "./features/customers/customersSlice";

export const store = configureStore({
  reducer: {
    user: userRed,
    category: categoryRed,
    product: productRed,
    order: orderRed,
    invoice: invoiceRed,
    customer: customersSlice,
    setting: settingRed,
    report: reportRed,
  },
});
