import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ links }) => {
  return (
    <nav className="flex my-5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-400 dark:hover:text-white"
          >
            <FaHome className="text-lg ml-2" />
            الرئيسيه
          </Link>
        </li>
        {links.map((link, index) => {
          if (index === links.length - 1) {
            return (
              <li key={index}>
                <div className="flex items-center">
                  <IoIosArrowBack className="text-xl mx-1 text-gray-500" />
                  <span className=" text-sm font-medium text-gray-500  dark:text-gray-400 dark:hover:text-white">
                    {link.text}
                  </span>
                </div>
              </li>
            );
          }
          return (
            <li key={index}>
              <div className="flex items-center">
                <IoIosArrowBack className="text-xl mx-1 text-gray-500" />
                <Link
                  to={link.href}
                  className=" text-sm font-medium text-gray-700 hover:text-purple-600  dark:text-gray-400 dark:hover:text-white"
                >
                  {link.text}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
