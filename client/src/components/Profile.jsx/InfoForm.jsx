import { Avatar, Button, Input } from "@material-tailwind/react";
import React from "react";

const InfoForm = () => {
  return (
    <>
      <h3 className="font-semibold text-2xl text-center mb-10">
        البيانات الشخصيه
      </h3>
      <div className="flex flex-col items-center mb-8">
        <label htmlFor="avatar">
          <Avatar
            className="mb-4"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="avatar"
          />
        </label>
        <input
          id="avatar"
          className="hidden"
          type="file"
          onChange={(e) => console.log(e.target.files)}
        />
        <p>Mohamed Fathy</p>
        <p>201210192476+</p>
      </div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <Input color="purple" variant="standard" label="اسم المستخدم" />
          </div>
          <div>
            <Input
              color="purple"
              type="email"
              variant="standard"
              label="البريد الالكتروني"
            />
          </div>
          <div>
            <Input
              color="purple"
              type="tel"
              variant="standard"
              label="رقم الهاتف"
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Unique visitors (per month)
            </label>
            <input
              type="number"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder=""
              required
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

export default InfoForm;
