import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Lottie from "lottie-react";
import authAnim from "../animations/auth.json";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const { user, token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="grid md:grid-cols-2">
      <div className="anim  md:order-2 flex items-center h-[25vh] justify-center md:h-screen px-3 lg:px-[60px] md:bg-gray-50">
        <Lottie className="w-full h-full" animationData={authAnim} />
      </div>
      <div className="auth  md:order-1 flex items-center h-[75vh] justify-center md:h-screen px-3 md:px-[30px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
