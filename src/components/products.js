import React from "react";
import { NavLink } from "react-router-dom";
import PriceFormat from "../helpers/priceFormat";

const Product = ({ items }) => {
  return (
    <div className="max-w-lg m-4  bg-primary-400 rounded-lg text-primary-50 overflow-hidden shadow-lg">
      <NavLink to={`/singleproduct/${items.id}`}>
        <img src={items?.image} alt="img" className="w-full" />
        <div className="py-4 px-6">
          <div className="font-medium text-2xl mb-2">{items?.name}</div>
          <div class="pb-2 text-xl">
            <h4>Category: {items?.category}</h4>
            <h4>Company: {items?.company}</h4>
            <h4>
              Price: <PriceFormat price={items?.price} />
            </h4>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
