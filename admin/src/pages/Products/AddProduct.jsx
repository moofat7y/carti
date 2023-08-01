import {
  Button,
  IconButton,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsPlus, BsTrash2 } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import BreadCrumbs from "../../components/BreadCrumbs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  updateProduct,
} from "../../app/features/product/productSlice";
import { useLocation } from "react-router-dom";

function AddProduct() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const [colors, setColors] = useState([]);
  const [image, setImage] = useState(
    location.state?.product ? location.state.product.product_image : null
  );
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef();
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

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

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
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

  const onSubmit = async (data) => {
    if (!image) {
      imgRef.current.classList.add("!border-red-500");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", +data.category);
    formData.append("price", +data.price);
    formData.append("discount", +data.discount);
    formData.append("image", image);
    formData.append("qty", data.qty);
    formData.append("colors", JSON.stringify(colors));

    setIsLoading(true);
    if (location.state?.product) {
      formData.append("_method", "PUT");
      await dispatch(
        updateProduct({ id: location.state.product.id, data: formData })
      );
    } else {
      await dispatch(createProduct({ data: formData }));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (location?.state?.product) {
      const product = location.state.product;
      setValue("name", product.name);
      setValue("qty", product.qty);
      setValue("discount", product.discount);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("category", product.category_name[0].id);
      // setColors(
      const colors = product.color_size?.map((size) => {
        return { name: size?.color, sizes: size?.size?.split(",") };
      });

      setColors(colors);
      // console.log(colors);
      // );
    }
  }, []);
  return (
    <div className="container ">
      <BreadCrumbs
        links={[
          { text: "المنتجات", href: "/products" },
          {
            text: location.state?.product ? "تعديل المنتج" : "اضافة منتج",
            href: "/add-product",
          },
        ]}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-4">
        <div className="w-full lg:w-[56%] ">
          <div className="flex items-center justify-center w-full mb-4">
            {image ? (
              <div className="w-full h-64 relative">
                <AiOutlineCloseCircle
                  onClick={() => setImage(null)}
                  className="absolute top-1 right-1 text-red-500 cursor-pointer"
                />
                <img
                  src={
                    image.length > 0
                      ? `https://cartyi.com/storage/images/products/${image[0]?.image}`
                      : URL.createObjectURL(image)
                  }
                  className="object-contain w-full h-full"
                />
              </div>
            ) : (
              <label
                ref={imgRef}
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  onChange={(e) => handleImageChange(e)}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            )}
          </div>
          <div className="mb-4">
            <Input
              color="purple"
              variant="standard"
              label="اسم المنتج"
              error={errors.name ? true : false}
              type="text"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <Textarea
              variant="standard"
              color="purple"
              label="تفاصيل المنتج"
              error={errors.description ? true : false}
              {...register("description", {
                required: true,
                minLength: {
                  value: 10,
                  message: "يجب كتابة ملخص لا يقل عن عشرة احرف",
                },
              })}
            />
          </div>
          <div className="mb-3">
            <Select
              color="purple"
              {...register("category", {
                required: true,
              })}
              onChange={(e) => setValue("category", e)}
              error={errors.category ? true : false}
              arrow={false}
              variant="standard"
              label="اختر الفئه"
              className="!flex "
            >
              {categories.map((cat) => {
                return (
                  <Option
                    key={cat.id}
                    style={{
                      right: "0px",
                      left: "unset",
                    }}
                    value={cat.id.toString()}
                  >
                    {cat.name}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="mb-4">
            <Input
              color="purple"
              variant="standard"
              label="السعر"
              type="number"
              error={errors.price ? true : false}
              {...register("price", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              color="purple"
              variant="standard"
              label="الكميه"
              type="number"
              min={0}
              error={errors.qty ? true : false}
              {...register("qty", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              color="purple"
              variant="standard"
              label="التخفيض"
              type="number"
              min={0}
              {...register("discount", {})}
            />
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <h3 className="text-3xl font-bold mb-4">الالوان والمقاسات</h3>
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color, colorIndex) => (
              <div key={colorIndex} className="rounded-md shadow-md p-4 h-fit">
                <div className="flex items-center gap-3 mb-3">
                  <input
                    className="px-1 rounded-md flex-shrink-0  mx-auto"
                    type="color"
                    name="name"
                    value={color.name}
                    onChange={(e) => handleColorChange(colorIndex, e)}
                  />
                </div>
                <h4 className="font-bold mb-2 ">الاحجام</h4>
                <div className="flex flex-wrap gap-2 ">
                  {color.sizes.map((size, sizeIndex) => (
                    <div
                      key={`${colorIndex}-${sizeIndex}`}
                      className="flex gap-2 items-center mb-2"
                    >
                      <Input
                        type="text"
                        value={size}
                        color="purple"
                        placeholder="الحجم"
                        variant="static"
                        containerProps={{ className: "!min-w-[20px] w-[40px]" }}
                        onChange={(e) =>
                          handleSizeChange(colorIndex, sizeIndex, e)
                        }
                      />

                      <IconButton
                        type="button"
                        variant="filled"
                        color="purple"
                        className="rounded-none flex-shrink-0"
                        onClick={() => removeSize(colorIndex, sizeIndex)}
                      >
                        <BsTrash2 />
                      </IconButton>
                    </div>
                  ))}
                </div>
                <IconButton
                  onClick={() => addSize(colorIndex)}
                  color="purple"
                  className=" mx-auto"
                  variant="outlined"
                >
                  <IoMdAddCircleOutline className="text-[16px]" />
                </IconButton>

                <Button
                  onClick={() => removeColor(colorIndex)}
                  color="purple"
                  className="d-block w-full mt-3"
                >
                  حذف اللون
                </Button>
              </div>
            ))}
            <div className="border border-dashed h-[212px] hover:border-purple-500 transition-colors rounded-md flex items-center justify-center">
              <IconButton onClick={addColor} color="purple" variant="filled">
                <BsPlus className="text-xl" />
              </IconButton>
            </div>
          </div>
        </div>

        <Button disabled={isLoading} type="submit" color="purple">
          {location?.state?.product ? "تعديل المنتج" : "اضافة المنتج"}
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;
