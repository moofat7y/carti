import React from "react";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../Pagination";
import { getCategories } from "../../app/features/categories/categorySlice";

const CategoryList = () => {
  const { categories, from, to, current } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  return (
    <>
      {categories.length > 0 ? (
        <>
          <div className="categories-list flex flex-col gap-2">
            {categories?.map((cat) => {
              return <CategoryItem key={cat.id} cat={cat} />;
            })}
          </div>
          <Pagination
            from={from}
            to={to}
            current={current}
            action={(page) => dispatch(getCategories({ page: page }))}
          />
        </>
      ) : (
        <div>لا يوجد اصناف</div>
      )}
    </>
  );
};

export default CategoryList;
