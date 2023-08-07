import { Avatar, Button, Input } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import userImg from "/img/prodDefault.webp";
const InfoForm = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <h3 className="font-semibold text-2xl text-center mb-10">
        البيانات الشخصيه
      </h3>
      <div className="flex flex-col items-center mb-8">
        <label htmlFor="avatar">
          {user.image ? (
            <Avatar
              className="mb-4"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="avatar"
            />
          ) : (
            <img
              className="w-10 h-10 object-contain rounded-full"
              src={userImg}
            />
          )}
        </label>
        <input
          id="avatar"
          className="hidden"
          type="file"
          onChange={(e) => console.log(e.target.files)}
        />
        <p>{user?.name}</p>
        <p>{user?.phone}</p>
      </div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <Input
              value={user?.name}
              disabled={true}
              color="purple"
              variant="standard"
              label="اسم المستخدم"
              className="text-center"
            />
          </div>
          <div>
            <Input
              color="purple"
              type="email"
              variant="standard"
              label="البريد الالكتروني"
              className="text-center"
              value={user?.email}
              disabled={true}
            />
          </div>
          <div>
            <Input
              color="purple"
              type="tel"
              variant="standard"
              label="رقم الهاتف"
              className="text-center"
              value={user?.phone}
              disabled={true}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default InfoForm;
