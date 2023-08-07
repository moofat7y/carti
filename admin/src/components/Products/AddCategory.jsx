import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Typography,
  Input,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import { createCategory } from "../../app/features/categories/categorySlice";

const AddCategory = () => {
  const {
    register,
    getValues,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [categoryModel, setCategoryModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleCategoryModel = () => setCategoryModel(true);

  const onCreateCategorySubmit = async (e) => {
    e.preventDefault();
    if (!getValues("name")) {
      setError("name", "name is required");
      return;
    }
    setIsLoading(true);
    await dispatch(createCategory({ name: getValues("name") }));
    reset();
    setIsLoading(false);
    setCategoryModel(false);
  };
  return (
    <>
      <Button
        onClick={() => setCategoryModel(true)}
        color="purple"
        variant="text"
        className="px-2 w-[120px] rounded-l rounded-r-none bg-purple-100"
      >
        اضافة تصنيف
      </Button>
      <Modal open={categoryModel} setOpen={setCategoryModel}>
        <div className="flex justify-between bg-purple-50 p-4">
          <Typography variant="h5" color="purple">
            الفئات
          </Typography>
          <IconButton
            color="purple"
            size="sm"
            variant="text"
            onClick={() => setCategoryModel(false)}
          >
            <GrClose />
          </IconButton>
        </div>
        <CardBody className="flex flex-col gap-4">
          <form id="category">
            <Input
              {...register("name", {})}
              variant="standard"
              color="purple"
              label="اكتب اسم الفئة"
              containerProps={{ className: "mb-4" }}
              size="lg"
              error={errors.name ? true : false}
            />
            <Button
              onClick={(e) => onCreateCategorySubmit(e)}
              type="submit"
              form="category"
              fullWidth
              color="purple"
              disabled={isLoading}
            >
              أضـف
            </Button>
          </form>
        </CardBody>
      </Modal>
    </>
  );
};

export default AddCategory;
