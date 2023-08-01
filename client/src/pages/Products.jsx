import React from "react";
import ProdSearch from "../components/products/ProdSearch";
import ProductList from "../components/products/ProductList";

const Products = () => {
  return (
    <div>
      <div className="products-banner h-[40vh] flex justify-center items-center ">
        <div className="contianer text-center">
          <h3 className="text-purple-200  text-2xl font-bold">Our Products</h3>
          <p className="w-[60vw] min-w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            tenetur quae, quidem consequatur magni iusto itaque. Quaerat,
            maiores repellat expedita, velit, totam labore amet similique quis
            numquam nisi doloremque eius?
          </p>

          <ProdSearch />
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Products;
