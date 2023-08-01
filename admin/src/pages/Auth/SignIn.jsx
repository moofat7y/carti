import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import api from "../../utils/api";
import { notifyError, notifySuccess } from "../../utils/notifies";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passShow, setPassShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await api.post("/login", data);
      window.localStorage.setItem("token", JSON.stringify(response.data.token));
      setIsLoading(false);
      navigate("/auth/verify");
      notifySuccess("لقد تم ارسال رمز التاكيد الى البريد الالكتروني");
    } catch (error) {
      setIsLoading(false);
      notifyError(error.response.data.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPassShow((prev) => !prev);
  };

  return (
    <div className="signin min-w-[320px] md:min-w-[350px] w-[60%]">
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h4"
          color="gray"
          className="text-center md:text-right"
        >
          تسجيل الدخول
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-center md:text-right"
        >
          قم بادخال بياناتك لتسجيل الدخول
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2  max-w-full"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("email", {
                required: true,
              })}
              color="purple"
              error={errors.email ? true : false}
              variant="standard"
              type="email"
              label="البريد الالكتروني"
            />
            <div className="relative">
              <div
                className="cursor-pointer absolute px-2 left-0 z-10 top-1/2 -translate-y-1/2 hover:text-purple-500  duration-200"
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
                })}
                color="purple"
                error={errors.password ? true : false}
                variant="standard"
                type={passShow ? "text" : "password"}
                label="كلمة المرور"
              />
            </div>
          </div>

          <Button
            disabled={isLoading}
            color="purple"
            type="submit"
            className="mt-6"
            fullWidth
          >
            تسجيل الدخول
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            ليس لديك حساب؟{" "}
            <Link
              to="/auth/signup"
              className="font-medium text-purple-500 transition-colors hover:text-purple-700"
            >
              انشاء حساب
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;