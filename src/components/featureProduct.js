/* eslint-disable array-callback-return */
import React from "react";
import { useProductContext } from "../context/productContext";
import Product from "./products";

const FeatureProduct = () => {
  const { isLoading, isError, products, featureProducts } = useProductContext();
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div className="bg-primary-100 py-4">
      <div>
          <div className="font-medium mx-auto w-96 text-center text-2xl rounded-lg bg-primary-400 text-primary-50 py-3">
            <h3 className="mb-2">Checknow</h3>
            <h1 className="mb-2">Our feature Product</h1>
          </div>
        <div className="flex justify-center mobile:grid grid-cols-2">
          {featureProducts?.map((items) => {
            return <Product key={items?.id} items={items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
