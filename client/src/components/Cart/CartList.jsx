import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import CartItem from "./CartItem";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import { createOrder } from "../../app/features/order/orderSlice";
const CartList = () => {
  const { cart } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const products = cart.products.map((prod) => {
      return {
        id: prod.product.id,
        quantity: prod.quantity,
        size: prod.size ? prod.size : null,
        color: prod.color ? prod.color : null,
      };
    });
    const orderData = {
      shipping_address: data["shipping-address"],
      products,
    };
    setIsLoading(true);
    await dispatch(createOrder({ data: orderData, navigate }));
    setIsOpen(false);
    setIsLoading(false);
  };
  return (
    <>
      {cart.products.length > 0 ? (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <span className="">الصوره</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    المنتج
                  </th>
                  <th scope="col" className="px-6 py-3">
                    اللون
                  </th>

                  <th scope="col" className="px-6 py-3">
                    الحجم
                  </th>

                  <th scope="col" className="px-6 py-3">
                    الكميه
                  </th>
                  <th scope="col" className="px-6 py-3">
                    السعر
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعديل
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map((prod) => {
                  return <CartItem key={prod.product.id} product={prod} />;
                })}
              </tbody>
            </table>
          </div>
          <Card className="mt-6 min-w-[250px] sm:w-[25%] w-full">
            <CardBody>
              <List>
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-vue"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="ml-3">
                      <Checkbox
                        disabled={true}
                        defaultChecked={false}
                        id="vertical-list-vue"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="gray" className="font-medium">
                      ادفع الان
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-svelte"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="ml-3">
                      <Checkbox
                        id="vertical-list-svelte"
                        ripple={false}
                        disabled={true}
                        defaultChecked={true}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      الدفع عند الاستلام
                    </Typography>
                  </label>
                </ListItem>
              </List>
              <div className="flex justify-between items-center">
                <span className="font-bold">السعر الكلي</span>
                <span className="text-purple-500 font-semibold">
                  {cart.cartTotal} ج.م
                </span>
              </div>
              <Button
                onClick={() => setIsOpen(true)}
                className="mt-3"
                color="purple"
                fullWidth
              >
                تاكيد الطلب
              </Button>
            </CardBody>
          </Card>
          <Modal open={isOpen} setOpen={setIsOpen}>
            <Card>
              <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    {...register("shipping-address", {
                      required: true,
                    })}
                    error={errors["shipping-address"]}
                    label="العنوان"
                    color="purple"
                    variant="standard"
                  />
                  <Button
                    type="submit"
                    className="mt-6"
                    disabled={isLoading}
                    fullWidth
                    color="purple"
                  >
                    تاكيد الطلب
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Modal>
        </>
      ) : (
        <Link
          to="/store"
          className="inline-flex mx-auto cursor-pointer items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="w-full">عربة التسوق فارغه تابع التسوق</span>
          <BsArrowLeft className="text-xl text-purple-500 mt-auto" />
        </Link>
      )}
    </>
  );
};

export default CartList;
