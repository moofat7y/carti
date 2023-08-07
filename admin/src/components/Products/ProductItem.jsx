import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  IconButton,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { BsBoxes } from "react-icons/bs";
import { LuCodesandbox } from "react-icons/lu";
import { TbCoins } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

import {
  createProduct,
  deleteProduct,
  removeNewProduct,
  updateProduct,
  updateProductImage,
} from "../../app/features/product/productSlice";
import prodDefault from "/prodDefault.webp";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";
import AddCategory from "./AddCategory";
import ProductDetails from "./ProductDetails";
import { GiSettingsKnobs } from "react-icons/gi";
import {
  AiOutlineDollar,
  AiOutlineBarcode,
  AiOutlineUser,
} from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { LiaAddressBookSolid } from "react-icons/lia";

const weight_unit = ["جم", "اوقيه", "رطل", "كجم"];

const ProductItem = ({
  product,
  setSelectedProduct,
  selectedProduct,
  newProduct,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product?.name,
      price: product?.price,
      weight_unit: product?.weight_unit,
      delivery: product?.delivery?.toString(),
      weight: product?.weight,
      cost: product?.cost,
      qty: product?.qty,
      discounted_price: product?.discounted_price,
      reduction_end: product?.reduction_end,
      sku: product?.sku,
      Maximum_quantity: product?.Maximum_quantity,
      description: product?.description,
      category:
        product?.category_name?.length > 0 ? product?.category_name[0]?.id : 0,
    },
  });

  const { categories } = useSelector((state) => state.category);
  const [isLoading, setIsLoading] = useState(false);
  const [colors, setColors] = useState(
    product?.color_size?.length > 0
      ? product?.color_size?.map((size) => {
          return { name: size?.color, sizes: size?.size?.split(",") };
        })
      : []
  );
  // Category
  const [colorModel, setColorModel] = useState(false);
  const [detailsModel, setDetailsModel] = useState(false);
  const [imageModel, setImageModal] = useState(false);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  // Colors & Quantity
  const handleColorChange = (index, event) => {
    const { name, value } = event.target;
    const newColors = [...colors];
    newColors[index][name] = value;
    setColors(newColors);
  };

  const handleSizeChange = (colorIndex, sizeIndex, event) => {
    const { value } = event.target;
    const newColors = [...colors];
    newColors[colorIndex].sizes[sizeIndex] = value;
    setColors(newColors);
  };

  const addColor = () => {
    setColors([...colors, { name: "#111111", sizes: [] }]);
  };

  const removeColor = (index) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  const addSize = (colorIndex) => {
    const newColors = [...colors];
    newColors[colorIndex].sizes.push("");
    setColors(newColors);
  };

  const removeSize = (colorIndex, sizeIndex) => {
    const newColors = [...colors];
    newColors[colorIndex].sizes.splice(sizeIndex, 1);
    setColors(newColors);
  };

  // ---------
  const handleColorsModel = () => setColorModel(true);

  // ----------

  const onDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteProduct({ ids: [product?.id] }));
    setIsLoading(false);
  };

  const onAddProductSubmit = async (data) => {
    console.log("from prod item " + product.id);

    setIsLoading(true);
    if (newProduct) {
      const productData = {
        ...data,
        colors: colors.length > 0 ? colors : null,
      };
      await dispatch(
        createProduct({ data: productData, newProdId: product.id })
      );
    } else {
      const productData = { ...data, colors, _method: "PUT" };
      await dispatch(updateProduct({ id: product.id, data: productData }));
    }
    setIsLoading(false);
  };

  const onImageOpen = () => {
    if (newProduct) {
      return;
    }
    setImageModal(true);
  };

  const handleUploadImage = (image) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("product_id", product.id);
    dispatch(updateProductImage({ data: formData, id: product.id }));
  };

  return (
    <>
      <form
        id={`update ${product.id}`}
        onSubmit={handleSubmit(onAddProductSubmit)}
      >
        <div className="border rounded-md p-4 ps-1 xl:ps-4 cursor-pointer flex">
          <div className="flex items-center pe-2 self-start">
            {newProduct ? (
              <AiFillCloseCircle
                onClick={() => dispatch(removeNewProduct(product.id))}
                className="text-red-500 cursor-pointer"
              />
            ) : (
              <>
                <input
                  id={product?.id}
                  disabled={product?.status === "cancel"}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) =>
                    e.target.checked
                      ? setSelectedProduct((prev) => [...prev, +e.target.id])
                      : setSelectedProduct((prev) =>
                          prev.filter((product) => product !== +e.target.id)
                        )
                  }
                  type="checkbox"
                  checked={
                    selectedProduct.findIndex((prod) => prod === product?.id) >=
                    0
                      ? true
                      : false
                  }
                  className="w-4 h-4 text-purple-600 bg-gray-100 bproduct-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bproduct-gray-600 cursor-pointer"
                />
                <label htmlFor={product?.id} className="sr-only">
                  checkbox
                </label>
              </>
            )}
          </div>
          <div className="flex flex-1 gap-2 flex-col xl:flex-row">
            <div className="w-full">
              <div className="flex felx-1 w-full gap-2">
                <div
                  onClick={() => onImageOpen()}
                  className={`h-[84px] w-[84px] ${
                    newProduct ? "opacity-50" : ""
                  }`}
                >
                  <img
                    className="w-full h-full object-contain"
                    src={
                      product?.product_image?.length > 0
                        ? `https://api.cartyi.com/storage/images/products/${product?.product_image[0]?.image}`
                        : prodDefault
                    }
                  />
                </div>

                <div className="flex flex-col flex-1 gap-2">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="relative col-span-6 xl:col-span-4">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                        <LuCodesandbox className="text-xl text-gray-500" />
                      </div>
                      <input
                        {...register("name", {
                          required: true,
                        })}
                        className={`border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none ${
                          errors.name ? "!border-red-500" : ""
                        }`}
                        placeholder="اسم المنتج"
                      />
                    </div>

                    <div className="relative col-span-6 xl:col-span-2">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 top-1/2 h-fit translate-y-[-50%]">
                        <TbCoins className="text-xl text-gray-500" />
                      </div>
                      <input
                        {...register("price", {
                          required: true,
                          valueAsNumber: true,
                        })}
                        className={`border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none ${
                          errors.price ? "!border-red-500" : ""
                        }`}
                        placeholder="السعر"
                      />
                      <div className="absolute inset-y-0 left-0 px-3 text-sm flex items-center">
                        ج.م
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="porduct-input grid grid-cols-6 gap-2 mt-2">
                <div className="flex col-span-6 xl:col-span-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <BsBoxes className="text-xl text-gray-500" />
                    </div>
                    <input
                      {...register("qty", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      className={`border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none ${
                        errors.qty ? "!border-red-500" : ""
                      }`}
                      placeholder="الكميه"
                    />
                  </div>
                  <Button
                    onClick={() => setColorModel(true)}
                    className="min-w-[80px] text-[10px] px-2 rounded rounded-r-none"
                    color="purple"
                    variant="text"
                  >
                    الخيارات والكميه
                  </Button>
                </div>

                <div className=" col-span-6 xl:col-span-3 flex">
                  <select
                    id="small"
                    {...register("category", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    placeholder="اختر تصنيف المنتج"
                    className={`block  w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-r  focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 ${
                      errors.category ? "!border-red-500" : ""
                    }`}
                  >
                    {categories.map((cat) => {
                      return (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      );
                    })}
                  </select>
                  <AddCategory />
                </div>
              </div>
            </div>

            <div className="flex-1 flex-col xl:flex gap-2">
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => setDetailsModel(true)}
                  className="d-flex rounded min-w-[120px] px-3 items-center "
                  color="purple"
                  variant="outlined"
                  fullWidth
                >
                  <span className="flex items-center justify-center">
                    <GiSettingsKnobs className="me-2" />
                    بيانات المنتج
                  </span>
                </Button>

                <Button
                  className="d-flex rounded px-3 min-w-[120px] items-center "
                  color="purple"
                  variant="filled"
                  form={`update ${product.id}`}
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                >
                  {newProduct ? "اضافه" : "تعديل"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Color Modal */}
      <Modal open={colorModel} setOpen={setColorModel}>
        <div className="flex justify-between bg-purple-50 p-4">
          <Typography variant="h5" color="purple">
            ادارة الالوان والاحجام
          </Typography>
          <IconButton
            color="purple"
            size="sm"
            variant="text"
            onClick={() => setColorModel(false)}
          >
            <GrClose />
          </IconButton>
        </div>
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {colors.map((color, colorIndex) => (
              <div key={colorIndex} className="rounded p-4 bg-purple-50">
                <div className="flex justify-between items-center">
                  <input
                    className="w-[120px] px-4 py-2 rounded-lg bg-purple-100 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your text"
                    type="color"
                    name="name"
                    value={color.name}
                    onChange={(e) => handleColorChange(colorIndex, e)}
                  />
                  <IconButton
                    onClick={() => removeColor(colorIndex)}
                    variant="filled"
                    color="red"
                  >
                    <RiDeleteBin5Line />
                  </IconButton>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  {color.sizes.map((size, sizeIndex) => (
                    <div
                      key={sizeIndex - colorIndex}
                      className="flex items-center col-span-6 xl:col-span-4 gap-2"
                    >
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                          <LuCodesandbox className="text-xl text-gray-500" />
                        </div>
                        <input
                          value={size}
                          onChange={(e) =>
                            handleSizeChange(colorIndex, sizeIndex, e)
                          }
                          className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                          placeholder="الحجم"
                        />
                      </div>

                      <div
                        onClick={() => removeSize(colorIndex, sizeIndex)}
                        className="w-[30px] h-[30px] flex items-center justify-center border-red-300 text-red-300 bg-white cursor-pointer border rounded-full"
                      >
                        <RiDeleteBin5Line className="text-red-300 text-[12px]" />
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  className="mt-3"
                  onClick={() => addSize(colorIndex)}
                  fullWidth
                  variant="text"
                  color="purple"
                >
                  اضافة حجم
                </Button>
              </div>
            ))}
          </div>
          <Button
            onClick={addColor}
            className="rounuded  mt-4"
            fullWidth
            variant="outlined"
            color="purple"
          >
            اضافة لون
          </Button>
        </div>

        <Button
          onClick={() => setColorModel(false)}
          className="rounded-none"
          fullWidth
          color="deep-purple"
        >
          حفظ
        </Button>
      </Modal>

      <Modal open={detailsModel} setOpen={setDetailsModel}>
        <form>
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
                  <Option value="1">نعم، يتطلب شحن</Option>
                  <Option value="0">لا يتطلب شحن</Option>
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
                      // required: true,
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
                        // required: true,
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
                  {...register("weight_unit", {
                    // required: true,
                    // valueAsNumber: true,
                  })}
                  placeholder="اختر تصنيف المنتج"
                  className={`block h-fit  leading-[1px] p-2.5 text-sm text-gray-900 border border-gray-300 rounded-l rounded-r-none  focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 ${
                    errors.weight_unit ? "!border-red-500" : ""
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
                        // required: true,
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
                        // required: true,
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
                      // required: true,
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
                      // required: true,
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
                      // required: true,
                      valueAsNumber: true,
                    })}
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    placeholder="الكميه"
                  />
                </div>
              </div>

              {/* ------------ */}

              {/* ------------ */}
              <div className="w-full">
                <Textarea
                  {...register("description", {
                    // required: true,
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
              variant="text"
              onClick={() => setDetailsModel(false)}
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

      <Modal open={imageModel} setOpen={setImageModal}>
        <div className="flex justify-between bg-purple-50 p-4">
          <Typography variant="h5" color="purple">
            صور المنتج
          </Typography>
          <IconButton
            color="purple"
            size="sm"
            variant="text"
            onClick={() => setImageModal(false)}
          >
            <GrClose />
          </IconButton>
        </div>
        <div className="p-4 max-h-[70vh] overflow-y-scroll">
          {/* content */}
          {/* Upload Img */}
          <div className="flex items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-24 p-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">اضغط لتحميل صورة المنتج</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {" "}
                  PNG, JPG (MAX. 800x600px)
                </p>
              </div>
              <input
                onChange={(e) => handleUploadImage(e.target.files[0])}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
          {/* ------------ */}
          <div className="w-full mt-5 grid grid-cols-2 gap-2">
            {product?.product_image?.map((image) => {
              return (
                <div key={image.id} className="img relative h-[200px]">
                  <img
                    src={`https://api.cartyi.com/storage/images/products/${image.image}`}
                    alt="bag"
                    className="max-h-full rounded-md w-full h-full object-contain"
                  />
                  <div className="remove-pic absolute -top-2 -right-2 text-red-500 text-xl cursor-pointer">
                    <AiFillCloseCircle />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" p-4">
          <Button
            variant="text"
            onClick={() => setImageModal(false)}
            className="mr-1 bg-gray-600 text-white font-medium hover:bg-gray-300 rounded-e-md"
          >
            <span>إغلاق</span>
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ProductItem;
