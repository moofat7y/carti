import { configureStore } from "@reduxjs/toolkit";
import productReduccer from "./features/product/productSlice";
import cartReduccer from "./features/cart/cartSlice";
import userReduccer from "./features/user/userSlice";
import orderRed from "./features/order/orderSlice";

export const store = configureStore({
  reducer: {
    product: productReduccer,
    cart: cartReduccer,
    user: userReduccer,
    order: orderRed,
  },
});
