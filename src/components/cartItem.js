import React from "react";
import PriceFormat from "../helpers/priceFormat";
import CartAmountToggle from "./cartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeProduct, setDecrease, setInCrease } = useCartContext();
  return (
    <div className="m-3 rounded-md py-3 px-5 text-primary-500 border-b border-primary-500">
      <div className="text-xl">
        <div className="flex gap-x-4 items-center">
          <img className="w-40 h-40" src={image} alt="img" />
          <div className="text-primary-500">
            <div className="text-3xl font-medium">{name}</div>
            <div className=" font-bold">color: {color || "null"}</div>
            <div className=" font-bold">
              Price: <PriceFormat price={price} />
            </div>
            <div className="2xl font-bold">amount: {amount}</div>
            <div className="font-bold -mt-2">
              <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setInCrease={() => setInCrease(id)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">
          Total:
          <span className="ml-1">
            <PriceFormat price={price * amount} />
          </span>
        </p>
        <div>
          <FaTrash className="w-7 h-7" onClick={() => removeProduct(id)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
