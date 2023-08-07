import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import CartBadge from "./CartBadge";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import { navListItems } from "../../utils/helpers";
import { useSelector } from "react-redux";

export default function StoreNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { settings } = useSelector((state) => state.setting);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navListItems.map((list) => {
        return (
          <Typography
            key={list.label}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to={list.link} className="flex items-center">
              {list.label}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <Navbar className="mx-auto shadow-none z-10 fixed max-w-full min-w-full w-full px-4 py-3 rounded-none  before:absolute before:h-[1px] before:w-full before:bg-gradient-to-r before:from-transparent before:from-0% before:via-purple-500 before:purple-50% before:to-transparent before:to-100% before:top-[100%]">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="ml-4 cursor-pointer py-1.5 font-medium">
          <img
            className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] object-contain"
            src={
              settings?.logo
                ? `https://api.cartyi.com/storage/images/vendors/logos/${settings.logo}`
                : "/logo.ico"
            }
          />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>

        <div className="mr-auto flex items-center gap-1 md:mr-4">
          <CartBadge />
          {user ? (
            <ProfileMenu />
          ) : (
            <Button
              onClick={() => navigate("/auth/signin")}
              className="py-2"
              variant="outlined"
              color="purple"
            >
              تسجيل الدخول
            </Button>
          )}
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
