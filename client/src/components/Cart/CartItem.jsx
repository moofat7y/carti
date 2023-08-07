import { IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../app/features/cart/cartSlice";
const CartItem = ({ product }) => {
  const [prodQuantity, setProdQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const updateQuantity = (qty) => {
    dispatch(
      updateCartQuantity({
        prodId: product.product.id,
        color: product.color,
        size: product.size,
        quantity: qty,
      })
    );
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (+prodQuantity !== +product.quantity) {
        updateQuantity(prodQuantity);
      }
    }, 200);
    return () => clearTimeout(timeId);
  }, [prodQuantity]);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-24 h-24 p-4">
        {product?.product?.product_image?.length > 0 ? (
          <img
            className="w-full h-full object-contain"
            src={
              "https://api.cartyi.com/storage/images/products/" +
              product.product.product_image[0].image
            }
            alt="Apple Watch"
          />
        ) : (
          <svg
            className="w-full h-full text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        )}
      </td>
      <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
        {product.product.name}
      </td>
      <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
        {product.color ? (
          <span
            className="inline-block p-3 rounded-full"
            style={{ backgroundColor: product?.color }}
          ></span>
        ) : (
          "_"
        )}
      </td>
      <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
        {product.size ? product.size : "_"}
      </td>
      <td className="px-6 py-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setProdQuantity((prev) => prev - 1)}
            className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <div>
            <input
              min="1"
              max={product.product.qty}
              onChange={(e) => setProdQuantity(e.target.value)}
              value={prodQuantity}
              type="number"
              id="first_product"
              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              required
            />
          </div>
          <button
            onClick={() => setProdQuantity((prev) => prev + 1)}
            className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
        {product.product.price} ج.م
      </td>
      <td className="px-6 py-2">
        <IconButton
          onClick={() => updateQuantity(0)}
          color="purple"
          variant="filled"
        >
          <FiTrash2 />
        </IconButton>
      </td>
    </tr>
  );
};

export default CartItem;
