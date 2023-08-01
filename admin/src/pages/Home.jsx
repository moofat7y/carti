import React from "react";
import { Link } from "react-router-dom";

// ------Icons--------
import { MdKeyboardArrowLeft } from "react-icons/md";

// -------Import elements-------
// import Report from "../components/home/Report";
// import HomeOrder from "../components/home/HomeOrder";
import HomeClient from "../components/home/HomeClient";
import HomeOrder from "../components/home/HomeOrder";
import { useSelector } from "react-redux";
const Home = () => {
  const { reports } = useSelector((state) => state.report);
  return (
    <>
      <div className="home">
        <div className="container mx-auto p-5">
          {/* Message Header */}
          <div className="complaints my-5">
            <Link
              to="/complaints"
              className="flex items-center justify-between gap-3 py-2 px-4 border border-red-100 bg-red-50 text-red-800 text-xs font-medium rounded-md"
            >
              <div className="flex items-center gap-3">
                <span className="num text-sm text-white bg-red-400 py-1 px-[10px] rounded-md">
                  {reports.length}
                </span>
                <p>
                  <strong>شكاوى العملاء: </strong>الرجاء الاطلاع والمتابعة لتجنب
                  خصم المبالغ او ايقاف الخدمة
                </p>
              </div>
              <div className="icon text-2xl text-red-300  ">
                <MdKeyboardArrowLeft />
              </div>
            </Link>
          </div>
          {/* Content Page */}
          <div className="rows flex gap-5">
            <div className="col w-full ">
              {/* Charts */}
              <div className="charts border rounded-md overflow-hidden flex items-center justify-center mb-10">
                {/* Reports */}
                {/* <Report /> */}
                {/* Chart */}
                {/* <Chart /> */}
              </div>
              {/* Orders */}
              <div className="orders">
                {" "}
                <HomeOrder />{" "}
              </div>
              {/* Clients */}
              <div className="clients">
                <HomeClient />
              </div>
            </div>
            {/* Side */}
            {/* <div className="col side w-[30%] flex flex-col gap-10"> */}
            {/* Notices */}
            {/* <Notices /> */}
            {/* Product Sold Out */}
            {/* <ProductOut /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
