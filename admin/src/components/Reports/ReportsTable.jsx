import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
// Icons
import { MdRebaseEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

import { LuEdit } from "react-icons/lu";
import ReportItem from "./ReportItem";
import { useDispatch, useSelector } from "react-redux";

import { Pagination } from "../Pagination";
import {
  getReports,
  updateReport,
} from "../../app/features/reports/reportSlice";

const reportStatus = [
  { text: "حلت", value: "pending" },
  { text: "لم تحل", value: "verified" },
  { text: "قيد المراجعه", value: "shipping" },
];

const ReportsTable = () => {
  const [selectedReport, setSelectedReport] = useState([]);
  const { reports, from, to, current } = useSelector((state) => state.report);
  console.log(selectedReport);
  const dispatch = useDispatch();
  const onUpdate = async (status) => {
    if (selectedReport.length > 0) {
      await dispatch(updateReport({ ids: selectedReport, status }));
      setSelectedReport([]);
    }
  };
  return (
    <>
      {/* Table */}
      {/* Head */}
      <div className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]">
        {/* Col */}
        <div className="col flex items-center gap-2">
          <div className="text flex items-center gap-1">
            <p className="my-1 font-semibold">الشكاوي</p>
            <span className="text-xs mr-1 text-gray-500">
              ({reports.length} شكوي)
            </span>
          </div>
        </div>
        {/* Col */}
        <div className="col">
          <Menu placement="bottom-end">
            <MenuHandler>
              <div className="breport select-none breport-purple-500 rounded-sm p-2 flex items-center gap-1 cursor-pointer text-xs">
                <MdRebaseEdit />
                تحرير سريع
              </div>
            </MenuHandler>
            <MenuList className="p-0">
              <MenuItem className="flex items-center justify-between py-3 gap-2">
                <Menu placement="right-start">
                  <MenuHandler>
                    <p className="flex items-center gap-2">
                      <LuEdit />
                      تعديل حالة الشكوي
                    </p>
                  </MenuHandler>
                  <MenuList className="-mt-3 ml-2 py-1">
                    {reportStatus.map((st) => {
                      return (
                        <MenuItem
                          onClick={() => onUpdate(st.text)}
                          key={st.value}
                        >
                          {st.text}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </MenuItem>
              <MenuItem className="flex items-center py-3 gap-2">
                <AiOutlineDelete />
                حذف الشكوي
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400 breport">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    onChange={(e) =>
                      e.target.checked
                        ? setSelectedReport((prev) =>
                            reports
                              .filter((report) => report.status !== "cancel")
                              .map((report) => report.id)
                          )
                        : setSelectedReport([])
                    }
                    disabled={reports.length < 1 ? true : false}
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 breport-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:breport-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                عنوان الشكوي
              </th>
              <th scope="col" className="px-6 py-3">
                اسم صاحب الشكوي
              </th>
              <th scope="col" className="px-6 py-3">
                الحاله
              </th>
              <th scope="col" className="px-6 py-3">
                تاريخ الانشاء
              </th>
              <th scope="col" className="px-6 py-3">
                تاريخ اخر تعديل
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Col */}
            {reports.map((report) => {
              return (
                <ReportItem
                  key={report?.id}
                  report={report}
                  selectedReport={selectedReport}
                  setSelectedReport={setSelectedReport}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          from={from}
          to={to}
          current={current}
          action={(page) => dispatch(getReports({ page: page }))}
        />
      </div>
    </>
  );
};

export default ReportsTable;
