import React from "react";
import FilterSection from "./components/filterSection";
import SortProduct from "./components/sortProduct";
import ProductList from "./components/productList";

const Products = () => {
  return (
    <div className="flex">
      <div>
        <FilterSection />
      </div>
      <section className="mt-10 w-full">
        <div>
          <SortProduct />
        </div>
        <div>
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Products;
