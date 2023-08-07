import React from "react";
// --------------
// Icons
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { PiShoppingBagOpenLight, PiFilesBold } from "react-icons/pi";
// ---------------
// Material
import { Menu, MenuHandler, MenuList, Button } from "@material-tailwind/react";

// ---------------
// Components
// import FilterSide from "../../components/dashboard/filter/FilterSide";
// import Links from "../../components/dashboard/header/Links";
// import Help from "../../components/dashboard/header/Help";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProdFilter from "../../components/Products/ProdFilter";
import OrdersFilter from "../../components/Orders/OrdersFilter";
import OrdersTable from "../../components/Orders/OrdersTable";
import { Link } from "react-router-dom";

// ---------------------

const Orders = () => {
  return (
    <>
      <div className="container">
        {/* Start Header */}
        <BreadCrumbs links={[{ text: "الطلبات", href: "/orders" }]} />
        {/* End Header */}
        {/* Group client */}
        <div className="group-client mb-6">
          <div className=" flex justify-between items-center mb-5">
            <Link to="/products/add-product">
              <Button
                className="px-2 md:px-6 flex items-center gap-2 cursor-pointer"
                color="purple"
              >
                <BiPlus />
                اضافة منتج جديد
              </Button>
            </Link>
            <div className="btn">
              <div className="flex gap-1 text-sm font-medium text-gray-500">
                <ProdFilter />
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Button
                      className="px-2 md:px-6 flex items-center gap-2 cursor-pointer"
                      variant="text"
                      color="purple"
                    >
                      <PiShoppingBagOpenLight />
                      خدمات
                    </Button>
                  </MenuHandler>
                  <MenuList className="p-0">
                    <a href="#" className="flex gap-2 items-center w-full p-3">
                      <AiOutlineCloudUpload />
                      تصنيفات المنتجات
                    </a>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          {/* Num Client */}
          {/* <OrdersFilter /> */}
        </div>
        <OrdersTable />
      </div>
    </>
  );
};

export default Orders;
