import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    getCardItem: (state, actions) => {
      console.log("invoked cart total item");
      //   return state;
    },
    addItemToCart: (state, actions) => {
      state.push(actions.payload);
    },
    deleteAllItemInCart: (state, actions) => {
      return [];
    },
  },
});
export const { getCardItem, addItemToCart, deleteAllItemInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
