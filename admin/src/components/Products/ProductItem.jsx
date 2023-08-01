import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { LuTrash2 } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../app/features/product/productSlice";

const ProductItem = ({ product, setSelectedProduct, selectedProduct }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteProduct({ ids: [product.id] }));
    setIsLoading(false);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id={product.id}
              onChange={(e) =>
                e.target.checked
                  ? setSelectedProduct((prev) => [...prev, +e.target.id])
                  : setSelectedProduct((prev) =>
                      prev.filter((product) => product !== +e.target.id)
                    )
              }
              type="checkbox"
              checked={
                selectedProduct.findIndex((od) => od === product.id) >= 0
                  ? true
                  : false
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 bproduct-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bproduct-gray-600 cursor-pointer"
            />
            <label htmlFor={product.id} className="sr-only">
              checkbox
            </label>
          </div>
        </td>

        <td className=" gap-2 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img
            className="w-14 h-14 rounded-md object-contain"
            loading="lazy"
            src={`https://cartyi.com/storage/images/products/${product.product_image[0]?.image}`}
            alt={product.name}
          />
          <div className="pl-3 ">
            <div className="text-md font-semibold">{product.name}</div>
          </div>
        </td>

        <td className="px-6 min-w-[150px] py-4">
          {product.category_name[0]?.name}
        </td>
        <td className="px-6  py-4">{product.price} ج.م</td>
        <td className="px-6  py-4">
          {new Date(product.created_at).toLocaleDateString()}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <IconButton
            onClick={() =>
              navigate("/products/add-product", { state: { product } })
            }
            variant="text"
            color="purple"
          >
            <BsPencilSquare className="text-purple-700 text-sm" />
          </IconButton>
          <IconButton
            disabled={isLoading}
            onClick={() => onDelete()}
            color="purple"
            className="mr-2"
          >
            <LuTrash2 className="text-sm" />
          </IconButton>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
