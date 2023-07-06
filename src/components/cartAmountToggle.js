import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CartAmountToggle = ({ amount, setDecrease, setInCrease }) => {
  return (
    <div className="flex my-3">
      <p className="relative top-1 pr-1">Quantity: </p>
      <button onClick={setDecrease} className="mr-2">
        <FaMinus className="bg-primary-500 text-primary-50 rounded-md py-1 text-3xl" />
      </button>
      <h1 className="text-primary-500 py-1 font-medium text-3xl">
        {amount}
      </h1>
      <button onClick={setInCrease} className="ml-2">
        <FaPlus className="bg-primary-500 text-primary-50 rounded-md py-1 text-3xl" />
      </button>
    </div>
  );
};

export default CartAmountToggle;
