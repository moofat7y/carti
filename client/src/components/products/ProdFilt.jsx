import React, { Fragment, useReducer, useState } from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import { BiFilter } from "react-icons/bi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Radio,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { prodFilters } from "../../utils/helpers";
import ReusebleDrawer from "../Drawer";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function ProdFilt() {
  const [open, setOpen] = React.useState(false);
  const [accordion, setAccordion] = useState(0);
  const [filters, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_FILTER":
        return { ...state, [action.filterName]: action.filterValue };
      default:
        return state;
    }
  }, {});
  const handleOpen = (value) => {
    setAccordion(accordion === value ? 0 : value);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton color="purple" onClick={() => setOpen(true)}>
        <BiFilter className="text-xl" />
      </IconButton>
      <ReusebleDrawer
        open={open}
        onClose={closeDrawer}
        placement={"left"}
        title="تصفيه"
      >
        <Fragment>
          {prodFilters.map((filter, index) => {
            return (
              <Accordion
                key={filter.title + index}
                open={accordion === index + 1}
                icon={<Icon id={index + 1} open={accordion} />}
              >
                <AccordionHeader onClick={() => handleOpen(index + 1)}>
                  {filter.title}
                </AccordionHeader>
                <AccordionBody>
                  <List
                    onChange={(e) =>
                      dispatch({
                        type: "SET_FILTER",
                        filterName: filter.title,
                        filterValue: e.target.value,
                      })
                    }
                  >
                    {filter.options.map((option, index) => {
                      return (
                        <ListItem key={option + index} className="p-0">
                          <label
                            htmlFor={option}
                            className="px-3 py-2 flex items-center w-full cursor-pointer"
                          >
                            <ListItemPrefix className="ml-3">
                              <Radio
                                name={filter.title}
                                id={option}
                                value={option}
                                ripple={false}
                                color="purple"
                                className="hover:before:opacity-0"
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </ListItemPrefix>
                            <Typography
                              color="blue-gray"
                              className="font-medium"
                            >
                              {option}
                            </Typography>
                          </label>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionBody>
              </Accordion>
            );
          })}
        </Fragment>
      </ReusebleDrawer>
    </React.Fragment>
  );
}
