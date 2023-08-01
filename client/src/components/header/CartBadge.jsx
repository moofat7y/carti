import React from "react";
import { Badge, Button, IconButton } from "@material-tailwind/react";
import { BsArrowLeft, BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ReusebleDrawer from "../Drawer";
import CartItem from "../CartItem";
export default function CartBadge() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { products, cartTotal } = cart;
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Link to="/cart">
        <Badge color="purple" content={products.length}>
          <IconButton color="white">
            <BsCart className="h-4 w-4" />
          </IconButton>
        </Badge>
      </Link>
      <div id="drawer-portal" />
      <ReusebleDrawer
        open={open}
        onClose={closeDrawer}
        placement={"right"}
        title="عربة التسوق"
      >
        <div className="flex flex-col h-[85vh]">
          {products.length > 0 ? (
            <>
              <div className="m-h-full overflow-auto">
                {products.map((prod) => {
                  return (
                    <CartItem
                      key={prod.product.id + prod.size + prod.color}
                      product={prod.product}
                      size={prod.size}
                      color={prod.color}
                      quantity={prod.quantity}
                    />
                  );
                })}
              </div>
              <div className="mt-auto py-4 border flex items-center px-2">
                <span className="font-semibold">الاجمالي</span> :{" "}
                <span className="font-semibold text-purple-500 ml-auto">
                  EGP {cartTotal}
                </span>
              </div>

              <Button color="purple" className="mt-2">
                اتمام الدفع
              </Button>
            </>
          ) : (
            <div
              onClick={() => {
                closeDrawer();
                navigate("/store");
              }}
              className="inline-flex my-auto cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="w-full">عربة التسوق فارغه تابع التسوق</span>
              <BsArrowLeft className="text-xl text-purple-500 mt-auto" />
            </div>
          )}
        </div>
      </ReusebleDrawer>
    </>
  );
}
