import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    getCardItem: (state, actions) => {
      //   return state;
    },
    addItemToCart: (state, actions) => {
      console.log("payload", actions.payload)
      state.push(actions.payload);
    },
    deleteACartItem: (state, actions) => {
      console.log("invoked cart delete item");
      state = state.filter((item) => item._id !== actions.payload._id);
    },
    deleteAllItemInCart: (state, actions) => {
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
