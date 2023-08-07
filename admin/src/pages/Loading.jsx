import React from "react";
import Logo from "/logo.ico";
const Loading = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center">
      <div className="w-[100px] h-[100px] animate-bounce ">
        <img
          src={Logo}
          alt="cartyi.logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Loading;
