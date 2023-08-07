import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProdFilter from "../../components/Products/ProdFilter";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbUsersGroup } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { PiShoppingBagOpenLight } from "react-icons/pi";
// Material
import { Menu, MenuHandler, MenuList, Button } from "@material-tailwind/react";
import CustomersFilter from "../../components/Customers/CustomersFilter";
import CustomerTable from "../../components/Customers/CustomersTable";

const Customers = () => {
  return (
    <>
      <div className="clients-list">
        <div className="container">
          {/* Start Header */}
          <BreadCrumbs links={[{ text: "العملاء", href: "/customers" }]} />
          {/* End Header */}
          {/* Group client */}

          <div className="mt-4 flex justify-between items-center mb-5">
            <div className="btn ms-auto">
              <div className="flex gap-1 text-sm font-medium text-gray-500">
                <ProdFilter />
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Button
                      color="purple"
                      variant="text"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <PiShoppingBagOpenLight />
                      خدمات
                    </Button>
                  </MenuHandler>
                  <MenuList className="p-0">
                    <a href="#" className="flex gap-2 items-center w-full p-3">
                      <AiOutlineCloudUpload />
                      استيراد العملاء
                    </a>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          {/* Table */}
          <CustomerTable />
        </div>
      </div>
    </>
  );
};

export default Customers;
