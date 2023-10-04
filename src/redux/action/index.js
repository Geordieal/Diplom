export const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DEL_ITEM",
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const setCartItem = (cartItems) => {
  return {
    type: "SET_ITEMS",
    payload: cartItems,
  };
};
