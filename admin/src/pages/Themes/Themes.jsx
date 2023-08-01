import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
// ----------------------

const Themes = () => {
  return (
    <div className="container">
      {/* Start Header */}
      <BreadCrumbs links={[{ text: "تصميم الموقع", href: "/themes" }]} />
      {/* End Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card className="">
          <CardHeader shadow={false} floated={false} className="h-40 m-0">
            <img
              src="/Theme.png"
              className="object-cover w-full h-full"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center py-2 px-6">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Pluma
            </Typography>
            <Typography color="purple" className="font-medium" textGradient>
              Default
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Button fullWidth disabled={true} color="purple">
              تم التثبيت
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Themes;
