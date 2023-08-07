import React from "react";
import { useState, useEffect, useRef } from "react";

import BreadCrumbs from "../../components/BreadCrumbs";
// ----------------------

import { BsClipboardData, BsFileEarmarkText } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { AiFillCloseCircle } from "react-icons/ai";

// ----------------------

// Functions

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BiPlanet } from "react-icons/bi";
import { updateUserSetting } from "../../app/features/setting/settingSlice";
import { useNavigate } from "react-router-dom";

const BasicSetting = () => {
  const { settings } = useSelector((state) => state.setting);
  // Start Location
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [favIcon, setFavIcon] = useState(false);
  const [logo, setLogo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ar`
        );
        const data = await response.json();
        setValue("city", data.city);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const handleLogoChange = (e) => {
    if (e.target.files.length > 0) {
      setLogo(e.target.files[0]);
    }
  };

  const handleFavIconChange = (e) => {
    if (e.target.files.length > 0) {
      setFavIcon(e.target.files[0]);
    }
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("logo", logo);
    formData.append("favicon", favIcon);
    formData.append("location", data.city);
    formData.append("_method", "PUT");
    console.log(data);
    setIsLoading(true);
    await dispatch(updateUserSetting({ data: formData, navigate }));
    setIsLoading(false);
  };

  useEffect(() => {
    if (settings) {
      setValue("name", settings.name);
      setValue("description", settings.description);
      setValue("subdomain", settings.subdomain);
      setValue("city", settings.location);
    }
  }, [settings]);
  return (
    <>
      <div className="basic-setting">
        <div className="container">
          {/* Start Header */}
          <BreadCrumbs
            links={[
              { text: "الإعدادات", href: "/settings" },
              { text: "الإعدادات الأساسية", href: "/settings/basic" },
            ]}
          />
          {/* End Header */}
          {/* Edit Data */}
          <div className="edit-data mt-8 rounded-lg overflow-hidden border">
            {/* Head */}
            <div className="head flex items-center gap-3 bg-gray-50 p-3 text-gray-700 font-semibold">
              <BsClipboardData className="text-xl font-bold" />
              <h2>بيانات المتجر</h2>
            </div>
            {/* Data */}
            <div className="data flex flex-col justify-center items-center p-5 gap-10">
              {/* Image */}
              <div className="upload-img flex flex-col gap-5 items-center justify-center">
                <div className="img max-h-[300px] max-w-[200px] rounded-md overflow-hidden">
                  {logo ? (
                    <img
                      src={URL.createObjectURL(logo)}
                      alt="bag"
                      className="h-[140px] w-[140px] object-contain"
                    />
                  ) : settings?.logo ? (
                    <img
                      src={
                        "https://api.cartyi.com/storage/images/vendors/logos/" +
                        settings.logo
                      }
                      alt="bag"
                      className="h-[140px] w-[140px] object-contain"
                    />
                  ) : (
                    <svg
                      className="w-[140px] h-[140px] text-gray-200 dark:text-gray-600"
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
                        <span className="font-semibold">
                          اضغط لتحميل شعار المتجر
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {" "}
                        PNG, JPG (MAX. 300x200px)
                      </p>
                    </div>
                    <input
                      onChange={(e) => handleLogoChange(e)}
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              {/* Form */}
              <div className="form w-full md:w-[60%]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name */}
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <HiOutlineHomeModern className="text-xl text-gray-500" />
                    </div>
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                      placeholder="اسم المتجر"
                    />
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <BiPlanet className="text-xl text-gray-500" />
                    </div>
                    <input
                      {...register("subdomain", {
                        required: true,
                      })}
                      disabled={true}
                      className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    />
                  </div>
                  {/* Details */}
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <BsFileEarmarkText className="text-xl text-gray-500" />
                    </div>
                    <textarea
                      {...register("description", {
                        required: true,
                      })}
                      placeholder="عن المتجر.."
                      className="border border-gray-300 h-11 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                    ></textarea>
                  </div>
                  {/* Location */}
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <CiLocationOn className="text-xl text-gray-500" />
                    </div>
                    <input
                      {...register("city", {
                        required: true,
                      })}
                      type="location"
                      className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full pr-10 p-2.5 outline-none"
                      placeholder="الموقع"
                    />
                    <button
                      onClick={() => onGetLocation()}
                      type="button"
                      className="btn cursor-pointer h-full p-2 absolute bottom-0 left-0 top-1/2 -translate-y-1/2 bg-purple-300 hover:bg-purple-400 duration-300 text-purple-800 rounded-l"
                    >
                      تحديد تلقائي
                    </button>
                  </div>
                  {/* Logo */}
                  <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-between items-center">
                    <div className="text text-center lg:text-right">
                      <p className="font-medium text-gray-800 mb-2">
                        ايقونة تبويب المتجر في المتصفح
                      </p>
                      <span className="text-sm text-gray-500">
                        المقاس الانسب 32 بكسل عرض 32 بكسل ارتفاع
                      </span>
                    </div>
                    <label
                      htmlFor="logo"
                      className="cursor-pointer flex gap-2 items-center"
                    >
                      <div className="box-logo h-10 w-10 rounded-md bg-gray-100">
                        <div className="logo w-full h-full relative">
                          {favIcon ? (
                            <img
                              src={URL.createObjectURL(favIcon)}
                              alt="bag"
                              className="max-h-full rounded-md h-full w-full object-contain"
                            />
                          ) : settings?.favicon ? (
                            <img
                              src={
                                "https://api.cartyi.com/storage/images/vendors/favicons/" +
                                settings.favicon
                              }
                              alt="bag"
                              className="max-h-full rounded-md h-full w-full object-contain"
                            />
                          ) : (
                            <svg
                              className="w-full h-full mb-2 text-gray-500 dark:text-gray-400"
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
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        رفع شعار ايقونة الموقع
                      </p>
                    </label>
                    <input
                      type="file"
                      onChange={(e) => handleFavIconChange(e)}
                      id="logo"
                      className="hidden"
                    />
                  </div>
                  {/* Save */}
                  <div className="save mt-10 mx-auto w-fit">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="bg-purple-300 hover:bg-purple-400 cursor-pointer text-purple-800 py-2 px-3 rounded-md duration-300"
                    >
                      حفـظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicSetting;
