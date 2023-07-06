const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, colorTik, amount, product } = action.payload;

    let existingProduct = state.cart.find(
      (currItem) => currItem.id === id + colorTik
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((currItem) => {
        if (currItem.id === id + colorTik) {
          let newAmount = currItem.amount + amount;
          if (newAmount >= currItem.max) {
            newAmount = currItem.max;
          }
          return {
            ...currItem,
            amount: newAmount,
          };
        } else {
          return {
            currItem,
          };
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + colorTik,
        name: product.name,
        colorTik,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_PRODUCT") {
    let updatedCart = state.cart.filter(
      (currItem) => currItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        let decAmount = currItem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...state,
          amount: decAmount,
        };
      } else {
        return currItem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        let incAmount = currItem.amount + 1;

        if (currItem.max !== undefined) {
          state.maxItem = currItem.max;
        }
        if (incAmount >= state.maxItem) {
          incAmount = state.maxItem;
        }
        return {
          ...state,
          amount: incAmount,
        };
      } else {
        return currItem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemValue = state.cart.reduce(
      (initalValue, currItem) => {
        let { amount } = currItem;
        initalValue = initalValue + amount;
        return initalValue;
      },
      0
    );
    return {
      ...state,
      total_item: updatedItemValue,
    };
  }
  if (action.type === "CART_PRICE_TOTAL") {
    let total_price = state.cart.reduce(
      (initialValue, currItem) => {
        let { price, amount } = currItem;
        initialValue = initialValue + price * amount;
        return initialValue;
      },
      [0]
    );
    return {
      ...state,
      total_price,
    };
  }
};

export default CartReducer;
