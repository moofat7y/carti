import { Avatar, Button, Input } from "@material-tailwind/react";
import React from "react";

const ChangePassword = () => {
  return (
    <>
      <h3 className="font-semibold text-2xl text-center mb-10">كلمة المرور</h3>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <Input
              color="purple"
              type="password"
              variant="standard"
              label="كلمة مرور جديده"
            />
          </div>
          <div>
            <Input
              color="purple"
              type="password"
              variant="standard"
              label="تاكيد كلمة المرور"
            />
          </div>
        </div>

        <Button color="purple" type="submit" className=" w-full sm:w-auto ">
          تحديث
        </Button>
      </form>
    </>
  );
};

export default ChangePassword;
