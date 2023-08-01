import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillEye } from "react-icons/ai";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <Card className="">
      <Link to={`/store/products/${product.id}`}>
        <CardHeader shadow={true} floated={false} className="h-[220px]">
          {product.product_image.length > 0 ? (
            <img
              src={
                "https://cartyi.com/storage/images/products/" +
                product.product_image[0].image
              }
              loading="lazy"
              className="w-full h-full object-contain"
            />
          ) : (
            <svg
              className="w-full h-full text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          )}
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2 line-clamp-1">
            <h4 className="font-medium line-clamp-1 text-black">
              {product.name}
            </h4>
            <h4 className="font-medium w-fill whitespace-nowrap text-black ps-3">
              {product.price} ج.م
            </h4>
          </div>
          <p color="gray" className="font-normal opacity-75 line-clamp-2">
            {product.description}
          </p>
        </CardBody>
      </Link>

      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-purple-100/80  py-2  text-purple-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          <Link
            className="w-full  flex justify-center"
            to={`/store/products/${product.id}`}
          >
            <AiFillEye className="text-xl " />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
