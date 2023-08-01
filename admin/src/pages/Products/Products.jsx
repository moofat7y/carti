import React from "react";
import { Link } from "react-router-dom";

// --------------
// Icons
import { AiOutlineCloudUpload } from "react-icons/ai";
import { PiShoppingBagOpenLight } from "react-icons/pi";

// ---------------
// Img

// ---------------
// Material
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";

// ---------------
// Components
// import FilterSide from "../../components/dashboard/filter/FilterSide";
// import Links from "../../components/dashboard/header/Links";
// import Help from "../../components/dashboard/header/Help";
import ProdFilter from "../../components/Products/ProdFilter";
import { BiPlus } from "react-icons/bi";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductTable from "../../components/Products/ProductTable";
// ---------------------

const links = [{ text: "المنتجات", href: "/products" }];
const Products = () => {
  console.log("red");
  return (
    <>
      <div className="products-list">
        {/* Sidebar Filter */}
        {/* <ProdFilter /> */}
        {/* Sidebar Filter */}
        <div className="container">
          {/* Start Header */}
          <BreadCrumbs links={links} />

          {/* End Header */}
          <div className="filter flex justify-between items-center mb-5">
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
          {/* Products Table */}
          {/* <ProductList /> */}
          <ProductTable />
        </div>
      </div>
    </>
  );
};

export default Products;
