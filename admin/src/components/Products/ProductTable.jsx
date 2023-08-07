import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { MdRebaseEdit } from "react-icons/md";
import { AiOutlineDelete, AiOutlineUsergroupDelete } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import {
  deleteProduct,
  getProducts,
} from "../../app/features/product/productSlice";
import { Pagination } from "../Pagination";
const ProductTable = () => {
  const [selectedProduct, setselectedProduct] = useState([]);
  const { products, newProducts, from, to, current } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const onSubmit = async () => {
    if (selectedProduct.length > 0) {
      await dispatch(deleteProduct({ ids: selectedProduct }));
      setselectedProduct([]);
    }
  };

  console.log(selectedProduct);
  return (
    <>
      <div className="text-gray-700 mb-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]">
        {/* Col */}
        <div className="col flex items-center gap-2">
          <div className="flex items-center">
            <input
              id="checkbox-all"
              onChange={(e) =>
                e.target.checked
                  ? setselectedProduct((prev) =>
                      products.map((product) => product.id)
                    )
                  : setselectedProduct([])
              }
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all" className="sr-only">
              checkbox
            </label>
          </div>
          <div className="text flex items-center gap-1">
            <AiOutlineUsergroupDelete className="mx-auto text-gray-700 text-2xl" />
            <p className="my-1 font-semibold">المنتجات</p>
            <span className="text-xs mr-1 text-gray-500">
              ({products.length} منتج)
            </span>
          </div>
        </div>
        {/* Col */}
        <div className="col">
          <Menu placement="bottom-end">
            <MenuHandler>
              <div
                className={`border select-none border-purple-500 rounded-sm p-2 flex items-center gap-1 cursor-pointer text-xs duration-200  ${
                  selectedProduct.length > 0 ? "" : "hidden"
                }`}
              >
                <MdRebaseEdit />
                تحرير سريع
              </div>
            </MenuHandler>
            <MenuList className="p-0">
              <MenuItem className="flex items-center py-3 gap-2">
                <GrFormAdd />
                اضافة الى مجموعة
              </MenuItem>
              <MenuItem
                onClick={() => onSubmit()}
                className="flex items-center py-3 gap-2"
              >
                <AiOutlineDelete />
                حذف من مجموعة
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div
        // style={{ gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))" }}
        className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-1	 gap-[14px]"
      >
        {newProducts?.map((prod) => {
          return (
            <ProductItem
              key={prod?.id}
              product={prod}
              newProduct={true}
              selectedProduct={selectedProduct}
              setSelectedProduct={setselectedProduct}
            />
          );
        })}
        {products?.map((prod) => {
          return (
            <ProductItem
              key={prod?.id}
              product={prod}
              selectedProduct={selectedProduct}
              setSelectedProduct={setselectedProduct}
            />
          );
        })}
      </div>
      {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    onChange={(e) =>
                      e.target.checked
                        ? setselectedProduct((prev) =>
                            products.map((product) => product.id)
                          )
                        : setselectedProduct([])
                    }
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                اسم المنتج
              </th>
              <th scope="col" className="px-6 py-3">
                القسم
              </th>
              <th scope="col" className="px-6 py-3">
                السعر
              </th>
              <th scope="col" className="px-6 py-3">
                التاريخ
              </th>
              <th scope="col" className="px-6 py-3">
                تعديل
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  product={product}
                  setSelectedProduct={setselectedProduct}
                  selectedProduct={selectedProduct}
                />
              );
            })}
          </tbody>
        </table>

        <Pagination
          from={from}
          to={to}
          current={current}
          action={(page) => dispatch(getProducts({ page: page }))}
        />
      </div> */}
    </>
  );
};

export default ProductTable;
