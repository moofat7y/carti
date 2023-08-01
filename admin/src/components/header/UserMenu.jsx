import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  InboxArrowDownIcon,
  ChevronDownIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avatar from "/profile.png";
import { logOut } from "../../app/features/user/userSlice";

const UserMenu = () => {
  const { user } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = async () => {
    setIsLoading(true);
    await dispatch(logOut({ navigate }));
    setIsLoading(false);
  };
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:mr-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-purple-500 p-0.5"
            src={user?.image ? user.image : avatar}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <Link to="/inbox">
          <MenuItem className="flex items-center gap-2 hover:bg-purple-50 focus:bg-purple-50 ">
            <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              الوارد
            </Typography>
          </MenuItem>
        </Link>

        <Button
          onClick={() => onLogout({ navigate })}
          disabled={isLoading}
          variant="text"
          color="red"
          fullWidth
          className="flex items-center gap-2 font-normal pt-[9px] px-3 pb-2"
        >
          <PowerIcon strokeWidth={2} className="h-4 w-4" />
          تسجيل الخروج
        </Button>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
