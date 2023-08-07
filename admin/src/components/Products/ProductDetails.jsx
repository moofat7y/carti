import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  IconButton,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";

import {
  AiOutlineDollar,
  AiOutlineBarcode,
  AiOutlineUser,
} from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { LiaAddressBookSolid } from "react-icons/lia";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modal";

const weight_unit = ["جم", "اوقيه", "رطل", "كجم"];

const ProductDetails = ({ data, detailsModel, setDetailsModel }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: data });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <Modal open={detailsModel} setOpen={setDetailsModel}>
        <form id="update" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between bg-purple-50 p-4">
            <Typography variant="h5" color="purple">
              تفاصيل المنتج
            </Typography>
            <IconButton
              color="purple"
              size="sm"
              variant="text"
              onClick={() => setDetailsModel(false)}
            >
              <GrClose />
            </IconButton>
          </div>

          <div className=" p-4 max-h-[70vh] overflow-y-auto">
            {/* content */}
            {/* Inputs */}
            <div className="inputs flex flex-col gap-5 max-h-[700px] overflow-y-auto">
              {/* ------------ */}
              <div className="w-full">
                <Select
                  id="select-c"
                  label="يتطلب شحن / توصيل ؟"
                  className="text-xs "
                  variant="standard"
                  color="purple"
                  dir="rtl"
                  arrow={false}
                  containerProps={{ className: "mb-4 mt-3" }}
                  value={getValues("delivery")}
                  onChange={(e) => setValue("delivery", e)}
                >
                  <Option value="0">نعم، يتطلب شحن</Option>
                  <Option value="1">لا يتطلب شحن</Option>
                </Select>
              </div>

              {/* ------------ */}
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                >
                  سعر التكلفة
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                    <AiOutlineDollar />
                  </div>
                  <input
                    {...register("cost", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    type="number"
                    id="price"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    placeholder="سعر التكلفة"
                  />
                </div>
              </div>
              {/* ------------ */}
              <div className="flex justify-between items-end -mt-2">
                <div className="flex-1">
                  <label
                    htmlFor="dis"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    الوزن
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <CiDiscount1 />
                    </div>
                    <input
                      {...register("weight", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      type="number"
                      id="dis"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-r-lg rounded-l-none focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                      placeholder="الوزن"
                    />
                  </div>
                </div>

                <select
                  id="small"
                  {...register("category", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="اختر تصنيف المنتج"
                  className={`block h-fit  leading-[1px] p-2.5 text-sm text-gray-900 border border-gray-300 rounded-l rounded-r-none  focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 ${
                    errors.category ? "!border-red-500" : ""
                  }`}
                >
                  {weight_unit.map((unit) => {
                    return (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* ------------ */}
              <div className="sm:flex justify-between -mt-2">
                <div className="sm:w-[47%] w-full">
                  <label
                    htmlFor="dis"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    السعر المخفض
                  </label>
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <CiDiscount1 />
                    </div>
                    <input
                      {...register("discounted_price", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      type="number"
                      id="dis"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                      placeholder="السعر المخفض"
                    />
                  </div>
                </div>
                <div className="sm:w-[47%] w-full">
                  <label
                    htmlFor="dis-f"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    نهاية التخفيض
                  </label>
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      {/* <AiOutlineCalendar /> */}
                    </div>
                    <input
                      type="date"
                      {...register("reduction_end", {
                        required: true,
                        valueAsDate: true,
                      })}
                      id="dis-f"
                      className=" border border-gray-300 text-gray-500 cursor-pointer text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 outline-none"
                      placeholder="نهاية التخفيض"
                    />
                  </div>
                </div>
              </div>
              {/* ------------ */}
              <div className="w-full -mt-2">
                <label
                  htmlFor="sku"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                >
                  رمز التخزين
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                    <AiOutlineBarcode />
                  </div>
                  <input
                    {...register("sku", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    type="number"
                    id="sku"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    placeholder="رمز رمز التخزين SKU"
                  />
                </div>
              </div>
              {/* ------------ */}
              <div className="w-full -mt-2">
                <label
                  htmlFor="max-m"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                >
                  أقصى كمية لكل عميل
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                    <AiOutlineUser />
                  </div>
                  <input
                    {...register("Maximum_quantity", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    type="number"
                    id="max-m"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    placeholder="أقصى كمية لكل عميل"
                  />
                </div>
              </div>
              {/* ------------ */}
              {/* <div className="w-full -mt-2">
                <label
                  htmlFor="address-f"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                >
                  العنوان الفرعي
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                    <LiaAddressBookSolid />
                  </div>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    id="address-f"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    placeholder="العنوان الفرعي"
                  />
                </div>
                <span className="block -mt-2 text-sm text-gray-500">
                  العنوان الفرعي يظهر تحت اسم المنتج في المتجر، بحد اقصى 35 حرف
                </span>
              </div> */}
              {/* ------------ */}
              {/* <div className="w-full">
                <label
                  htmlFor="address-t"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                >
                  العنوان الترويجي
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                    <LiaAddressBookSolid />
                  </div>
                  <input
                    {...register("description", {
                      required: true,
                    })}
                    type="text"
                    id="address-t"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    placeholder="العنوان الترويجي"
                  />
                </div>
                <span className="block -mt-2 text-sm text-gray-500">
                  العنوان الترويجي يظهر على صورة المنتج في المتجر، بحد أقصى 25
                  حرف
                </span>
              </div> */}
              {/* ------------ */}
              <div className="w-full">
                <label
                  htmlFor="address-t"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                >
                  تحديد كمية المنتج
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                    <LiaAddressBookSolid />
                  </div>
                  <input
                    {...register("qty", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    placeholder="الكميه"
                  />
                </div>
              </div>

              {/* ------------ */}
              {/* <div className="w-full flex flex-col">
                <Checkbox
                  color="purple"
                  id="ripple-file"
                  label="ارفاق ملف عند الطلب"
                  ripple={true}
                />
                <Checkbox
                  color="purple"
                  id="ripple-word"
                  label="امكانية كتابة ملاحظة"
                  ripple={true}
                />
                <Checkbox
                  color="purple"
                  id="ripple-pro"
                  label="المنتج خاضع لضريبة"
                  ripple={true}
                />
              </div> */}
              {/* ------------ */}
              <div className="w-full">
                <Textarea
                  {...register("description", {
                    required: true,
                  })}
                  color="purple"
                  variant="standard"
                  label="وصف المنتج"
                  className="min-h-[170px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <Button
              form="update"
              variant="text"
              type="submit"
              className="mr-1 bg-purple-200 text-gray-900 font-medium hover:bg-purple-300"
            >
              <span>حفظ بيانات المنتج</span>
            </Button>
            <Button
              variant="text"
              onClick={() => setDetailsModel(false)}
              className="mr-1 bg-gray-200 text-gray-700 font-medium hover:bg-gray-300"
            >
              <span>إلغاء</span>
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ProductDetails;
