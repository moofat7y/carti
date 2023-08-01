import React from "react";
import { useSelector } from "react-redux";
import ProdItLoading from "./loading/ProdItLoading";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, isLoading } = useSelector((state) => state.product);

  const prodList = products.map((prod) => {
    return <ProductItem key={prod._id} product={prod} />;
  });
  return (
    <div className="container">
      <div className="grid gap-y-4 gap-x-2 xxl:gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <>
            <ProdItLoading />
            <ProdItLoading />
            <ProdItLoading />
            <ProdItLoading />
            <ProdItLoading />
            <ProdItLoading />
            <ProdItLoading />
          </>
        ) : (
          prodList
        )}
      </div>
    </div>
  );
};

export default ProductList;
