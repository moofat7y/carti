import React from "react";
import ReusebleDrawer from "../Drawer";

// Icons
import { FiUser } from "react-icons/fi";
import { TbUsersGroup } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SlLocationPin, SlCalender } from "react-icons/sl";

// Material
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Radio,
  Checkbox,
  Button,
} from "@material-tailwind/react";

// ---------------------
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// ---------------------
import { Fragment, useState } from "react";
const ProdFilter = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <Button
        variant="text"
        color="purple"
        onClick={() => setOpenDrawer(true)}
        className="px-2 md:px-6 flex items-center gap-2 cursor-pointer"
      >
        <BiFilterAlt />
        تصفية
      </Button>
      <ReusebleDrawer
        open={openDrawer}
        onClose={closeDrawer}
        placement={"left"}
        title={"filter"}
      >
        <div className="flex justify-between items-center gap-2 p-4">
          <Typography
            variant="h5"
            color="blue-gray"
            className="text-base flex gap-2 items-center"
          >
            <BiFilterAlt />
            فرز العملاء حسب
          </Typography>
          <div className="close text-3xl cursor-pointer text-red-500">
            <IoIosCloseCircleOutline />
          </div>
        </div>
        <div className="p-2 mb-3">
          <p className="text-sm mb-3 font-medium text-gray-500">
            طلبات جديدة الإسم او رقم الجوال يحتوي على
          </p>
          <Input label="ابحث عن ما تريد" />
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <Typography
                  color="blue-gray"
                  className="ml-auto font-normal flex items-center gap-2"
                >
                  <FiUser />
                  الجنس
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-all"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="gender"
                        id="vertical-list-all"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-2">
                      الكل
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-men"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="gender"
                        id="vertical-list-men"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-2">
                      الذكور
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-women"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="gender"
                        id="vertical-list-women"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-2">
                      الإناث
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <Typography
                  color="blue-gray"
                  className="ml-auto font-normal flex items-center gap-2"
                >
                  <SlLocationPin />
                  العنوان
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-egy"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="country"
                        id="vertical-list-egy"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-2">
                      مصر
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 3 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-b-0 p-3"
              >
                <Typography
                  color="blue-gray"
                  className="ml-auto font-normal flex items-center gap-2"
                >
                  <TbUsersGroup />
                  المجموعات
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Fragment>
                  <div className="flex flex-col w-full">
                    <Checkbox id="ripple-all" label="الكل" ripple={true} />
                    <Checkbox
                      id="ripple-client-more"
                      label="العملاء الاكثر شرائاً"
                      ripple={false}
                    />
                    <Checkbox
                      id="ripple-client"
                      label="عملاء اصحاب ولاء مرتفع"
                      ripple={false}
                    />
                    <Checkbox
                      id="ripple-client-cu"
                      label="الفئة الماسية"
                      ripple={false}
                    />
                  </div>
                </Fragment>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 4 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-b-0 p-3"
              >
                <Typography
                  color="blue-gray"
                  className="ml-auto font-normal flex items-center gap-2"
                >
                  <SlCalender />
                  تاريخ فتح الحساب
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-2">
                <label htmlFor="from">من</label>
                <input
                  type="date"
                  name="date"
                  id="from"
                  placeholder="من"
                  className="outline-none p-2 border rounded-md cursor-pointer"
                />
                <label htmlFor="to">إلى</label>
                <input
                  type="date"
                  name="date"
                  id="to"
                  placeholder="إلى"
                  className="outline-none p-2 border rounded-md cursor-pointer"
                />
              </List>
            </AccordionBody>
          </Accordion>
        </List>
        <div className="btns w-full flex gap-3">
          <button className="flex items-center justify-center w-[70%] text-center gap-1 py-2 px-4 duration-300 bg-purple-200 hover:bg-purple-300 text-purple-800 font-normal text-sm rounded-md">
            عرض النتائج
          </button>
          <button className="flex items-center justify-center w-1/2 text-center gap-1 py-2 px-4 duration-300 bg-gray-200 hover:bg-gray-300 text-gray-800 font-normal text-sm rounded-md">
            إعادة تعيين
          </button>
        </div>
      </ReusebleDrawer>
    </>
  );
};

export default ProdFilter;
