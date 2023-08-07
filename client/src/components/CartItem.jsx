import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../app/features/cart/cartSlice";
import { IoMdClose } from "react-icons/io";
const CartItem = ({ product, size, color, quantity }) => {
  const [prodQuantity, setProdQuantity] = useState(quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateQuantity = () => {
      dispatch(
        updateCartQuantity({
          prodId: product._id,
          color,
          size,
          quantity: prodQuantity,
        })
      );
    };

    const timeId = setTimeout(() => {
      if (+prodQuantity !== +quantity) {
        updateQuantity();
      }
    }, 200);
    return () => clearTimeout(timeId);
  }, [prodQuantity]);
  return (
    <div className="flex  items-center bg-white  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full py-2">
      <img
        className="object-cover rounded-t-lg h-20 w-20 md:rounded-none md:rounded-l-lg"
        src={
          "https://api.cartyi.com/storage/images/products/" +
          product.product_images[0].image
        }
        alt=""
      />
      <div className="flex flex-col justify-between leading-normal mr-2">
        <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title} {color ? " " + "-" + " " + color : ""}
        </h5>
        <div className="flex mt-2">
          <label htmlFor="quantity" className="ml-2">
            Quantity:
          </label>
          <input
            type="number"
            id={product._id + color + size}
            name="quantity"
            min="1"
            max={product.quantity}
            onChange={(e) => setProdQuantity(e.target.value)}
            value={prodQuantity}
            className="border-2 rounded-full px-2 py-1 w-16"
          />
        </div>

        <div className="">
          <span className="text-gray-500">{quantity}</span>
          <span className="text-gray-500 mx-2">X</span>
          <span className="text-purple-500">{product.price}</span>
        </div>
      </div>
      <IoMdClose
        className="ms-auto text-purple-500 cursor-pointer"
        onClick={() =>
          dispatch(
            updateCartQuantity({
              prodId: product._id,
              color,
              size,
              quantity: 0,
            })
          )
        }
      />
    </div>
  );
};

export default CartItem;
