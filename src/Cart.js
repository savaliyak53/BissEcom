import CartItem from "./components/cartItem";
import { useCartContext } from "./context/cartContext";
import { NavLink } from "react-router-dom";
import PriceFormat from "./helpers/priceFormat";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="w-full h-[47.4vh] flex justify-center items-center">
        <h3 className="text-primary-50 bg-primary-500 w-[50%] text-center text-2xl font-medium rounded-md p-3">
          No item inside cart
        </h3>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center text-primary-500 text-xl font-medium">
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
      <div className="bg-primary-500 w-[25rem] mb-2 p-2 text-primary-50 rounded-md font-medium">
        <div>
          Subtotal:
          <span className="ml-1">
            <PriceFormat price={total_price} />
          </span>
        </div>
        <div>
          Shipping Fee:{" "}
          <span className="ml-1">
            <PriceFormat price={shipping_fee} />
          </span>
        </div>
        <div>
          <span className="ml-1">
            Total Price: <PriceFormat price={total_price + shipping_fee} />
          </span>
        </div>
      </div>
      <div>
        <button
          className="bg-primary-500 w-[25rem] mb-2 p-2 text-primary-50 rounded-md font-medium"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <NavLink to="/product">
        <button className="bg-primary-500 w-[25rem] p-2 text-primary-50 rounded-md font-medium">
          Countiue Shopping
        </button>
      </NavLink>
    </div>
  );
};

export default Cart;
