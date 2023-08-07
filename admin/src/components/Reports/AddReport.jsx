import { React, useState } from "react";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
// ------------------
// Material
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Tooltip,
  Textarea,
  IconButton,
} from "@material-tailwind/react";

// Icons
import { BiCommentError } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
import api from "../../utils/api";
import { notifySuccess } from "../../utils/notifies";
// ------------------

const AddReport = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  // ---------------
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  // ---------------

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", image);
      formData.append("phone", data.phone);
      const res = await api.post("/submit-new-complaint", formData);
      notifySuccess("لقد تم ارساال الشكوي بنجاح وسيتم الرد قريبا");
      setOpen(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Tooltip content=" تقديم شكوى" placement="bottom">
        <Button
          onClick={handleOpen}
          className="bg-red-500 w-fit p-2 rounded-full flex gap-2 items-center text-2xl font-bold"
        >
          <BiCommentError />
        </Button>
      </Tooltip>
      {/* Modal */}
      <Modal open={open} setOpen={handleOpen}>
        <Card className="mx-auto w-full ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex justify-between bg-purple-50 p-4">
              <Typography variant="h5" color="blue-gray">
                ادارة الالوان والاحجام
              </Typography>
              <IconButton
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={() => setOpen(false)}
              >
                <GrClose />
              </IconButton>
            </div>
            <CardBody>
              <Input
                {...register("title", {
                  required: true,
                })}
                error={errors.title ? true : false}
                label="عنوان الشكوى"
                variant="standard"
                size="lg"
                color="purple"
                containerProps={{ className: "mb-5" }}
              />
              <Input
                {...register("phone", {
                  valueAsNumber: true,
                })}
                error={errors.phone ? true : false}
                label="رقم الهاتف"
                variant="standard"
                size="lg"
                color="purple"
                containerProps={{ className: "mb-5" }}
              />
              <Textarea
                {...register("description", {
                  required: true,
                })}
                error={errors.description ? true : false}
                variant="standard"
                color="purple"
                label="تفاصيل الشكوى"
              />
              <div className="flex items-center justify-center w-full">
                {image ? (
                  <div className="w-full h-[260px] relative">
                    <img
                      className="object-contain w-full h-full"
                      src={URL.createObjectURL(image)}
                    />
                    <AiOutlineCloseCircle
                      onClick={() => setImage(null)}
                      className="absolute top-0 right-0 cursor-pointer"
                    />
                  </div>
                ) : (
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">
                        اضف صورة للمشكلة
                      </p>
                    </div>
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" color="purple" type="submit" fullWidth>
                ارسـل
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Modal>
    </>
  );
};

export default AddReport;
