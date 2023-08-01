import React from "react";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <Search />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
