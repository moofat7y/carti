import React from "react";
import { IconButton } from "@material-tailwind/react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function CartBadge() {
  const { cart } = useSelector((state) => state.cart);
  const { products } = cart;

  return (
    <Link to="/cart" className="relative">
      <IconButton color="white">
        <BsCart className="h-4 w-4" />
      </IconButton>
      <span className="absolute top-[-5px] right-[-5px] w-[20px] h-[20px] rounded-full bg-purple-500 text-white text-center text-[10px] flex items-center justify-center">
        {products.length}
      </span>
    </Link>
  );
}
