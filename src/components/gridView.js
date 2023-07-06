import React from "react";
import Product from "./products";

const GridView = ({ products }) => {
  return (
    <div className="grid mobile:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:ml-16 lg:ml-0 justify-items-center">
      {products.map((items) => {
        return <Product key={items?.id} items={items} />;
      })}
    </div>
  );
};

export default GridView;
