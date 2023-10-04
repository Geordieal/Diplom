const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newStateAdd = [...state, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(newStateAdd));
      return newStateAdd;
      break;

    case "DEL_ITEM":
      const newStateDel = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(newStateDel));
      return newStateDel;

      break;

    case "CLEAR_CART":
      localStorage.removeItem("cartItems");
      return [];
      break;

    case "SET_ITEMS":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};

export default addItems;
