import React, { useState } from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { searchFilters } from "../../utils/helpers";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const [filter, setFilter] = useState(0);
  return (
    <div className="flex justify-center w-[min-content]">
      <Input
        type="text"
        placeholder={searchFilters[filter].placeholder}
        className=" rounded-e-none rounded-s-md focus:border focus:!border-purple-500"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "w-[20%] !min-w-[120px] md:!min-w-[200px]",
        }}
      />

      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Button
            color="white"
            className="rounded-none px-3 md:px-6  md:min-w-[120px] w-[120px] hover:shadow-none shadow-none"
          >
            {searchFilters[filter].text}
          </Button>
        </MenuHandler>
        <MenuList className="min-w-[120px] p-0 rounded-none">
          {searchFilters.map((filter, index) => {
            return (
              <MenuItem
                key={filter.text}
                className="rounded-none text-center"
                onClick={() => setFilter(index)}
              >
                {filter.text}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Button
        color="purple"
        className="px-3 md:px-6  hover:shadow-none shadow-none rounded-none"
      >
        <BsSearch />
      </Button>
    </div>
  );
};

export default Search;
