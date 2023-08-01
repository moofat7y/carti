import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyOtb } from "../../app/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const otbs = [1, 2, 3, 4];
const VerifyOtb = () => {
  const [code, setCode] = useState(null);
  const { isLoading, isError } = useSelector((state) => state.user);
  const inputs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const focusNextInput = (index) => {
    if (inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
    if (index === 3) {
      const values = inputs.current.map((input) => input.value).join("");
      setCode(values);
    }
  };
  const handleInputChange = (event, index) => {
    const value = event.target.value;
    if (value.length === 1) {
      focusNextInput(index);
    }
  };
  const onCodeFilled = async () => {
    dispatch(verifyOtb({ code, navigate }));
  };
  useEffect(() => {
    if (code) {
      onCodeFilled();
    }
  }, [code]);

  return (
    <div className="signup min-w-[320px] md:min-w-[350px] w-[60%]">
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h4"
          color="gray"
          className="text-center md:text-right"
        >
          رمز التحقق
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-center md:text-right"
        >
          سيتم ارسال رمز التحقق الي رمز هاتفك
        </Typography>
        <div className="mt-8 mb-2  max-w-full">
          <div className="mb-4 flex gap-6 justify-center" dir="ltr">
            {otbs.map((otb, index) => {
              return (
                <Input
                  id={index}
                  key={otb}
                  disabled={isLoading}
                  ref={(el) => (inputs.current[index] = el?.firstElementChild)}
                  onChange={(event) => handleInputChange(event, index)}
                  maxLength={1}
                  className="focus:!border-t-purple-500 !text-base !rounded-md w-[30px] h-[30px] focus:!border-purple-500 ring-4 ring-transparent focus:ring-purple-500/20 !border !border-purple-gray-50 bg-white !px-2 placeholder:text-purple-gray-200 text-purple-gray-500"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "max-w-[30px] min-w-[30px]" }}
                />
              );
            })}
          </div>
        </div>

        {isError ? (
          <Button
            disabled={isLoading}
            onClick={() => onCodeFilled()}
            variant="text"
            color="purple"
          >
            حاول مجددا
          </Button>
        ) : null}
      </Card>
    </div>
  );
};

export default VerifyOtb;
