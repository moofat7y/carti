import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { IoCloseOutline } from "react-icons/io5";
import { GoMoveToStart } from "react-icons/go";
import { navigations } from "../utils/helpers";
import { Link, NavLink } from "react-router-dom";
import cartiLogo from "/logo.ico";
import { useSelector } from "react-redux";
const SideBar = () => {
  const { settings } = useSelector((state) => state.setting);
  const [open, setOpen] = React.useState(0);
  const [openNav, setOpenNav] = useState(
    window.innerWidth <= 719 ? false : true
  );
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth <= 719 ? setOpenNav(false) : setOpenNav(true)
    );
  }, []);

  return (
    <Card
      className={`h-screen fixed top-0 z-50 right-0 md:sticky md:overflow-hidden w-[240px] md:w-[25%] xl:w-[15%] px-0 py-4 shadow-xl shadow-blue-gray-900/5 bg-purple-700 text-white rounded-none duration-150 transition-transform ${
        openNav ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="mb-2 relative p-4 flex items-center">
        <Link to="/">
          <img
            src={
              settings?.logo
                ? "https://api.cartyi.com/storage/images/vendors/logos/" +
                  settings?.logo
                : cartiLogo
            }
            className="w-[45px] h-[45px] object-contain"
          />
        </Link>
        <IoCloseOutline
          onClick={() => setOpenNav(false)}
          className="text-xl md:hidden text-white mr-auto cursor-pointer"
        />

        <GoMoveToStart
          onClick={() => setOpenNav(true)}
          className={`text-2xl text-purple-700 absolute top-1/4 -translate-y-1/2  -left-4 md:hidden cursor-pointer font-bold ${
            openNav ? "!hidden" : ""
          }`}
        />
      </div>
      <List className="min-w-fit">
        {navigations.map((nav) => (
          <NavLink
            key={nav.text}
            to={nav.link}
            className="text-white active:bg-purple-800"
          >
            <ListItem className="hover:bg-purple-800 hover:text-white active:text-white focus:text-white">
              <ListItemPrefix className="mr-0">{nav.icon}</ListItemPrefix>
              {nav.text}
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Card>
  );
};

export default SideBar;
