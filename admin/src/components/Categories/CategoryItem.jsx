import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../app/features/categories/categorySlice";
import EditCategory from "./EditCategory";
const CategoryItem = ({ cat }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const onDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteCategory({ id: cat.id }));
    setIsLoading(false);
  };
  return (
    <div className="category flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
      <div className="info flex gap-3">
        <div className="text flex flex-col justify-between gap-2">
          <h2 className="text-lg text-gray-700">{cat.name}</h2>
        </div>
      </div>
      <div className="events">
        <div className="btn flex gap-2">
          <EditCategory cat={cat} />
          <IconButton
            disabled={isLoading}
            onClick={() => onDelete()}
            color="purple"
          >
            <MdDeleteOutline className="text-md" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
