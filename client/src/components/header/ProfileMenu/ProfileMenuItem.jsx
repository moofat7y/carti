import { MenuItem, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ProfileMenuItem({ label, icon, href, onClick, isLastItem }) {
  return (
    <Link to={href}>
      <MenuItem
        onClick={onClick}
        className={`flex items-center gap-2 rounded hover:bg-purple-50 focus:bg-purple-50
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
    </Link>
  );
}
export default ProfileMenuItem;
