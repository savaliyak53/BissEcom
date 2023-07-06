import React from "react";
import Products from "./products";

const ListView = ({ products }) => {
  return (
    <div className="grid mobile:grid-cols-1 -gap-x-56 mobile:mx-24 grid-cols-2 mx-auto w-[70%]">
      {products.map((items) => {
        return <Products key={items?.id} items={items} />;
      })}
    </div>
  );
};

export default ListView;
