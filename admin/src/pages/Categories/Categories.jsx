import React, { useState } from "react";

// import Help from "../../components/dashboard/header/Help";
// import Links from "../../components/dashboard/header/Links";

// --------------------
// Icons

// Modal Material

// Elements
// import Category from "../../components/dashboard/categories/Category";
import BreadCrumbs from "../../components/BreadCrumbs";

import CategoryList from "../../components/Categories/CategoryList";

import AddCategory from "../../components/Categories/AddCategory";
// ---------------

const Categories = () => {
  return (
    <>
      <div className="categories">
        <div className="container mx-auto ">
          {/* Start Header */}
          <BreadCrumbs links={[{ text: "الاصناف", href: "/categories" }]} />
          {/* End Header */}
          <div className="btn-add flex justify-between items-center  mb-3">
            <div className="modal">
              <AddCategory />
            </div>
          </div>

          {/* Categories Table */}
          <CategoryList />
        </div>
      </div>
    </>
  );
};

export default Categories;
