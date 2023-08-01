import React from "react";
// ----------------------

import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
// ----------------------

const Settings = () => {
  return (
    <>
      <div className="settings">
        <div className="container">
          {/* Start Header */}
          <BreadCrumbs links={[{ text: "الإعدادات", href: "/settings" }]} />
          {/* End Header */}
          {/* Title */}
          <div className="title text-lg mt-6 font-semibold text-gray-500">
            <h2>إعدادات المتجر</h2>
          </div>
          {/* Boxes */}
          <div className="row grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            <Link to="/settings/basic" className="col">
              <div className="block text-center py-8 border rounded-lg text-gray-500 hover:text-purple-900 duration-300">
                <div className="icon">
                  {" "}
                  <IoSettingsOutline className="mx-auto text-4xl text-purple-500" />
                </div>
                <h2 className="my-1 font-semibold">الإعدادات الأساسية</h2>
                <span className="text-sm text-gray-400">
                  الاسم , المقر , الشعار..
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
