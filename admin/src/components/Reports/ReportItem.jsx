import React, { useState } from "react";
import { Link } from "react-router-dom";
import { reportStatusColors } from "../../utils/helpers";
import Modal from "../Modal";
import {
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

const ReportItem = ({ report, selectedReport, setSelectedReport }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <DialogHeader className="bg-gray-50">تفاصيل الشكوى</DialogHeader>
        <DialogBody divider>
          <div className="name font-medium text-gray-500">
            <p className="inline-block ml-3">اسم العميل :</p>
            <span className="">{report?.user.name}</span>
          </div>
          <hr className="my-3" />
          <div className="phone font-medium text-gray-500">
            <p className="inline-block ml-3">رقم الهاتف :</p>
            <span className="">{report?.user.phone}</span>
          </div>
          <hr className="my-3" />
          <div className="email font-medium text-gray-500">
            <p className="inline-block ml-3">الايميل :</p>
            <span className="">{report?.user.email}</span>
          </div>
          <hr className="my-3" />
          <div className="num-order font-medium text-gray-500">
            <p className="inline-block ml-3">رقم الشكوي :</p>
            <span className="">{report?.id}</span>
          </div>
          <hr className="my-3" />
          <div className="details font-medium text-gray-500">
            <p className="inline-block ml-3">تفاصيل الشكوى :</p>
            <span className="">{report?.description}</span>
          </div>
          <hr className="my-3" />
          <div className="pic font-medium text-gray-500">
            <p className="inline-block ml-3">صورة الشكوى :</p>
            <Link
              to="#"
              target="_blank"
              className="border px-3 py-1 rounded-md bg-purple-400 hover:bg-purple-600 duration-300 text-white"
            >
              عرض
            </Link>
          </div>
          <hr className="my-3" />
          <div className="type font-medium text-gray-500">
            <p className="inline-block ml-3">حالة الشكوى :</p>
            <span className="text-red-300">{report?.status}</span>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setIsOpen(false)}
            className="mr-1"
          >
            <span>الغاء</span>
          </Button>
        </DialogFooter>
      </Modal>
      <tr
        onClick={() => setIsOpen(true)}
        className="bg-white breport-b cursor-pointer dark:bg-gray-800 dark:breport-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              onClick={(e) => e.stopPropagation()}
              id={report?.id}
              disabled={report?.status === "cancel"}
              onChange={(e) =>
                e.target.checked
                  ? setSelectedReport((prev) => [...prev, +e.target.id])
                  : setSelectedReport((prev) =>
                      prev.filter((report) => report !== +e.target.id)
                    )
              }
              type="checkbox"
              checked={
                selectedReport.findIndex((od) => od === report?.id) >= 0
                  ? true
                  : false
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 bproduct-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bproduct-gray-600 cursor-pointer"
            />
            <label htmlFor={report?.id} className="sr-only">
              checkbox
            </label>
          </div>
        </td>

        <td className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <div className="pl-3 ">
            <div className="text-md font-semibold">{report?.title}</div>
          </div>
        </td>

        <td className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <div className="pl-3 ">
            <div className="text-md font-semibold">{report?.user.name}</div>
          </div>
        </td>
        <td className="px-6 min-w-[150px] py-4">
          {report?.status}
          <span
            className={`w-2 h-2 rounded-full mr-2 inline-block ${
              reportStatusColors[report?.status]
            }`}
          ></span>
        </td>
        <td className="px-6  py-4">
          {" "}
          {new Date(report?.updated_at).toLocaleDateString()}
        </td>
        <td className="px-6  py-4">
          {new Date(report?.created_at).toLocaleDateString()}
        </td>
      </tr>
    </>
  );
};

export default ReportItem;
