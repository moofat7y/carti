import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileMenuItem from "./ProfileMenuItem";
import { MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../app/features/user/userSlice";
function ProfileMenuItems({ items, onClose }) {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const onLogout = async () => {
    setIsLoading(true);
    await dispatch(logOut({ navigate }));
    setIsLoading(false);
  };
  return (
    <MenuList className="p-1">
      {items.map(({ label, icon, href }, key) => {
        const isLastItem = key === items.length - 1;
        if (isLastItem) {
          return (
            <MenuItem
              onClick={() => onLogout()}
              className={`flex items-center gap-2 rounded 
                isLastItem
              hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10
              ${isLoading ? "!bg-gray-500" : ""}    
              `}
            >
              {icon}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        }
        return (
          <ProfileMenuItem
            key={label}
            label={label}
            icon={icon}
            href={href}
            onClick={handleClose}
          />
        );
      })}
    </MenuList>
  );
}
export default ProfileMenuItems;
