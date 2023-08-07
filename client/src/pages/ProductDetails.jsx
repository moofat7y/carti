import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FaOpencart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Ratings from "../components/productDetails/Ratings";
import api from "../utils/api";
import ProdDetailsLoading from "../components/productDetails/loading/ProdDetailsLoading";
import { addToCart } from "../app/features/cart/cartSlice";
const ImageDisplay = ({ image }) => {
  return (
    <img
      src={"https://api.cartyi.com/storage/images/products/" + image}
      alt={image}
      className="h-full w-full rounded-md object-contain"
    />
  );
};

const ImagePreview = ({ image, isSelected, onClick }) => {
  return (
    <img
      src={"https://api.cartyi.com/storage/images/products/" + image}
      alt={image}
      className={`h-16 w-16 rounded-md object-contain m-1 duration-200 ${
        isSelected
          ? "border-2 border-purple-600"
          : "border-2 border-transparent"
      }`}
      onClick={onClick}
    />
  );
};

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState({ color: null, index: 0 });
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [prodDetails, setProdDetails] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsloading(true);
        const res = await api.get(`show-product/${id}`);

        const productData = {
          ...res.data,
          color_size: res.data.color_size.map((color) =>
            color.size.length > 0
              ? { ...color, size: color.size.split(",") }
              : { ...color, size: [] }
          ),
        };
        setProdDetails(productData);
        setSelectedColor({ color: productData.color_size[0]?.color, index: 0 });
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
      }
    };
    if (id) {
      getProduct();
    }
  }, [id]);
  const handleColorChange = (color) => {
    // setSelectedImage(color.images[0]);
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  const onSubmit = () => {
    if (prodDetails.color_size?.length > 0 && !selectedColor) {
      return;
    }
    if (
      prodDetails?.color_size[selectedColor.index]?.size?.length > 0 &&
      !selectedSize
    ) {
      return;
    }
    dispatch(
      addToCart({
        product: prodDetails,
        color: selectedColor?.color || null,
        size: selectedSize,
      })
    );
  };

  return (
    <div className="container py-4">
      {isLoading ? (
        <ProdDetailsLoading />
      ) : (
        <>
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <Link
                    href={"/"}
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    الرئيسيه
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <Link
                    to={"/store"}
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    المنتجات
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <Link
                  to={`/store/products/${id}`}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {id}
                </Link>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row items-center mt-4  md:gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-64 md:h-96 relative">
                {prodDetails?.product_image.length > 0 ? (
                  <ImageDisplay image={prodDetails?.product_image[0]?.image} />
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
              </div>
              <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap mt-4 pb-1">
                {/* {prodDetails?.product_image?.map((image) => (
                  <ImagePreview
                    key={image.id}
                    image={image.image}
                    isSelected={image.id === selectedImage.id}
                    onClick={() => handleImageChange(image)}
                  />
                ))} */}
              </div>
            </div>

            <div className="w-full md:w-1/2 my-4 md:ml-4">
              <div className="flex justify-between">
                <h2 className="text-2xl line-clamp-1 font-semibold mb-2">
                  {prodDetails?.name}
                </h2>
                <p className="text-purple-600 mt-2 whitespace-nowrap ps-2">
                  السعر: {prodDetails?.price} ج.م
                </p>
              </div>

              <p className="e-600 mt-2 whitespace-nowrap ps-2">
                الكميه المتاحه: {prodDetails?.qty}
              </p>
              {/* <Ratings
                stars={prodDetails?.totalrating}
                reviews={prodDetails?.ratings}
              /> */}
              <form className="mt-4">
                {/* Colors */}
                <div>
                  {prodDetails?.color_size.length > 0 && (
                    <>
                      <h3 className="text-sm font-medium text-purple-900">
                        الالوان
                      </h3>
                      <div className="colors mt-4 flex gap-4">
                        {prodDetails?.color_size?.map((color, index) => (
                          <div
                            key={index}
                            style={{
                              backgroundColor: color.color,
                              borderWidth: "2px",
                              borderColor: color.color,
                            }}
                            onClick={() =>
                              handleColorChange({
                                color: color.color,
                                index: index,
                              })
                            }
                            className={`${
                              index === selectedColor.index
                                ? "!bg-transparent"
                                : ""
                            } relative -m-0.5  cursor-pointer text-center rounded-full focus:outline-none w-8 h-8 duration-300`}
                          ></div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className=" mt-4">
                  {prodDetails?.color_size[selectedColor?.index]?.size?.length >
                    0 && (
                    <>
                      <h3>الاحجام</h3>
                      <div className="sizes flex gap-4">
                        {prodDetails.color_size[selectedColor.index].size.map(
                          (s) => (
                            <div
                              onClick={() => handleSizeChange(s)}
                              key={s}
                              className={`${
                                s === selectedSize
                                  ? " bg-purple-500 text-white"
                                  : " bg-gray-100"
                              } relative -m-0.5  cursor-pointer text-center rounded-md  focus:outline-none py-3 px-4`}
                            >
                              <p className="font-semibold">{s}</p>
                            </div>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              </form>

              <Button
                onClick={() => onSubmit()}
                variant="filled"
                color="purple"
                className="w-full md:w-[150px] mt-4"
              >
                <FaOpencart className="text-xl mx-auto" />
              </Button>

              <h3 className="mt-2 text-sm font-medium text-purple-900">
                تفاصيل المنتج
              </h3>
              <p className="">{prodDetails?.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
