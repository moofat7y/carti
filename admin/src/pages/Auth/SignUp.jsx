import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Radio,
  Select,
  Checkbox,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import api from "../../utils/api";
import { notifySuccess } from "../../utils/notifies";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [passShow, setPassShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (!data.role) {
      return;
    }
    try {
      setIsLoading(true);
      const response = await api.post("/register", data);
      setIsLoading(false);
      navigate("/auth/signin");
      notifySuccess("لقد تم إنشاء حسابك بنجاح");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setPassShow((prev) => !prev);
  };

  return (
    <div className="signup min-w-[320px] md:min-w-[350px] w-[60%]">
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h4"
          color="gray"
          className="text-center md:text-right"
        >
          إنشاء حساب
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-center md:text-right"
        >
          قم بإدخال بياناتك لإنشاء حساب
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 max-w-full"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("name", {
                required: true,
              })}
              error={errors.name ? true : false}
              variant="standard"
              color="purple"
              label="الاسم بالكامل"
            />
            <Input
              {...register("username", {
                required: true,
              })}
              error={errors.username ? true : false}
              variant="standard"
              type="text"
              color="purple"
              label="اسم المستخدم"
            />
            <Input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "الرجاء استخدام بريد إلكتروني صالح",
                },
              })}
              error={errors.email ? true : false}
              variant="standard"
              color="purple"
              label="البريد الإلكتروني"
            />

            <Input
              {...register("phone", {
                required: true,
              })}
              error={errors.phone ? true : false}
              variant="standard"
              type="tel"
              color="purple"
              label="رقم الهاتف"
            />
            <div className="relative">
              <div
                className="cursor-pointer absolute px-2 left-0 z-10 top-1/2 -translate-y-1/2 hover:text-purple-500 duration-200"
                onClick={togglePasswordVisibility}
              >
                {passShow ? (
                  <AiFillEyeInvisible className="text-md" />
                ) : (
                  <AiFillEye className="text-md" />
                )}
              </div>
              <Input
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
                error={errors.password ? true : false}
                variant="standard"
                color="purple"
                type={passShow ? "text" : "password"}
                label="كلمة المرور"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center pl-3">
              <input
                {...register("role", { required: true })}
                onChange={(e) => setValue("role", e.currentTarget.value)}
                id="user"
                type="radio"
                value="User"
                name="list-radio"
                color="purple"
                className="w-4 h-4 text-purple-500 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:!shadow-none"
              />
              <label
                htmlFor="user"
                className="w-full py-1 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                مشتري
              </label>
            </div>
            <div className="flex items-center pl-3">
              <input
                {...register("role", { required: true })}
                onChange={(e) => setValue("role", e.currentTarget.value)}
                id="seller"
                type="radio"
                value="Seller"
                name="list-radio"
                color="purple"
                className="w-4 h-4 text-purple-500 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:!shadow-none"
              />
              <label
                htmlFor="seller"
                className="w-full py-1 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                بائع
              </label>
            </div>
          </div>
          <Button
            disabled={isLoading}
            color="purple"
            type="submit"
            className="mt-6"
            fullWidth
          >
            إنشاء حساب
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            هل لديك حساب بالفعل؟
            <Link
              to="/auth/signin"
              className="font-medium text-purple-500 transition-colors hover:text-purple-700"
            >
              تسجيل الدخول
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
