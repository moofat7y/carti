import React, { useState } from "react";
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { BsPlus } from "react-icons/bs";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCategory } from "../../app/features/categories/categorySlice";
const AddCategory = () => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  // ----------
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setIsLoading(true);
    await dispatch(createCategory(data));
    reset();
    setIsLoading(false);
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        color="purple"
        className="flex items-center gap-1 p-3 "
      >
        <BsPlus className="-mb-1 text-xl" />
        اضافة فئة جديدة
      </Button>

      <Modal open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader
            color="purple"
            className="mb-4 grid h-28 place-items-center bg-gradient-to-r from-purple-400 to-purple-500"
          >
            <Typography variant="h3" color="white">
              اضافة فئة جديدة
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              {...register("name", {
                required: true,
              })}
              variant="standard"
              color="purple"
              label="اكتب اسم الفئة"
              size="lg"
              error={errors.name ? true : false}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleOpen}
              fullWidth
              type="submit"
              disabled={isLoading}
              className="text-lg bg-gradient-to-r from-purple-400 to-purple-500 hover:shadow-purple-200"
            >
              أضـف
            </Button>
          </CardFooter>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default AddCategory;
