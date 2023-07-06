import React, { useState } from "react";
import CartAmountToggle from "./cartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [colorTik, setColorTik] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setInCrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div>
      <div>
        <p>
          <span className="mb-2">Colors:</span>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: `${color}` }}
                onClick={() => {
                  setColorTik(color);
                }}
                className="rounded-full w-5 h-5 mx-[3px]"
              />
            );
          })}
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setInCrease={setInCrease}
      />
      <NavLink
        to="/cart"
        onClick={() => addToCart(id, colorTik, amount, product)}
      >
        <button className="text-3xl py bg-primary-500 rounded-md text-primary-50 p-3">Add To Cart</button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
