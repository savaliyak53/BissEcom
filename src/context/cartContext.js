import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const cartContext = createContext();

function getLocalCartData() {
  let newCartData = localStorage.getItem("bissCart");
  if (newCartData === []) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
}

const initialState = {
  cart: getLocalCartData(),
  totalItem: "",
  totalAmount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, colorTik, amount, product) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { id, colorTik, amount, product },
    });
  };

  const removeProduct = (id) => {
    return dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const setDecrease = (id) => dispatch({ type: "SET_DECREMENT", payload: id });
  const setInCrease = (id) => dispatch({ type: "SET_INCREMENT", payload: id });

  //add data localStorage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_PRICE_TOTAL" });
    localStorage.setItem("bissCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeProduct,
        clearCart,
        setDecrease,
        setInCrease,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider };
