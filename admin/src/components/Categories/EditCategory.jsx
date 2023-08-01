import React, { useState } from "react";
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  IconButton,
} from "@material-tailwind/react";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  createCategory,
  editCategory,
} from "../../app/features/categories/categorySlice";
import { BiEdit } from "react-icons/bi";
const EditCategory = ({ cat }) => {
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
  } = useForm({ values: { name: cat.name } });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setIsLoading(true);
    await dispatch(editCategory({ id: cat.id, name: data.name }));
    reset();
    setIsLoading(false);
    setOpen(false);
  };
  return (
    <React.Fragment>
      <IconButton onClick={handleOpen} color="purple" variant="outlined">
        <BiEdit className="text-md" />
      </IconButton>
      <Modal open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader
            color="purple"
            className="mb-4 grid h-28 place-items-center bg-gradient-to-r from-purple-400 to-purple-500"
          >
            <Typography variant="h3" color="white">
              تعديل
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
              placeholder={cat.name}
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
              تعديل
            </Button>
          </CardFooter>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default EditCategory;
