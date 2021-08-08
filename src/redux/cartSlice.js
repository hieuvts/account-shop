import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, actions) => {
      const index = state.findIndex(
        (account) => account._id === actions.payload._id
      );
      //Add account to cart if it not exist there
      if (index < 0) {
        state.push(actions.payload);
      }
    },
    deleteACartItem: (state, actions) => {
      return state.filter((cart) => cart._id !== actions.payload.account_id);
    },
    deleteAllItemInCart: (state, actions) => {
      //Return empty state
      return [];
    },
  },
});
export const {
  getCardItem,
  addItemToCart,
  deleteACartItem,
  deleteAllItemInCart,
} = cartSlice.actions;
export default cartSlice.reducer;
