import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import StoreNavBar from "../components/header/NavBar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../app/features/product/productSlice";
import { getOrders } from "../app/features/order/orderSlice";
import { getCart } from "../app/features/cart/cartSlice";
import { getUserSetting } from "../app/features/setting/settingSlice";
const StoreLayout = () => {
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    if (token) {
      dispatch(getUserSetting({ id: user.id }));
      dispatch(getOrders());
      dispatch(getCart());
    }
  }, []);

  return (
    <div className="store relative">
      <StoreNavBar />
      <div className="main pt-[70px] md:pt-[80px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default StoreLayout;
