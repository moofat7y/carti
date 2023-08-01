import React from "react";

// ---------------

import { BsEmojiAngry } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";
// ---------------

import BreadCrumbs from "../../components/BreadCrumbs";

// ---------------
import ReportsTable from "../../components/Reports/ReportsTable";

const Complaints = () => {
  return (
    <>
      <div className="complaints">
        <div className="container">
          {/* Start Header */}
          <BreadCrumbs links={[{ text: "الشكاوى", href: "/complaints" }]} />
          {/* End Header */}
          <div className="complaints-table relative overflow-x-auto shadow-md sm:rounded-lg border">
            <h3 className="w-full p-4 bg-gray-50 font-semibold text-gray-600">
              <BsEmojiAngry className="ml-3 text-xl font-bold inline-block" />
              شكاوى العملاء
            </h3>
            <ReportsTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Complaints;
