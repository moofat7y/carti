import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Avatar, Menu, MenuHandler, Button } from "@material-tailwind/react";
import { useCallback, useState } from "react";
import ProfileMenuItems from "./ProfileMenuItems";
import { profileMenuItems } from "../../../utils/helpers";
import { useSelector } from "react-redux";
import avatar from "/profile.png";
function ProfileMenu() {
  const { user } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-purple-500 p-0.5"
            src={user.image ? user.image : avatar}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <ProfileMenuItems items={profileMenuItems} onClose={closeMenu} />
    </Menu>
  );
}
export default ProfileMenu;
