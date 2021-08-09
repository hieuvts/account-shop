import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      game: "default",
      price: 100,
      imgPreview:
        "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt790135e9302ea702/5f9b3bdf8825282bcecdeaf1/akali_skin01.jpg",
      totalChampion: 18,
      totalSkin: 31,
      rank: "Bronze",
    },
  ],
  reducers: {
    getItemFromCart: (state) => {
      return state;
    },
    addItemToCart: (state, actions) => {
      console.log("invoked add item");
      const index = state.findIndex(
        (account) => account._id === actions.payload._id
      );
      console.log("index", index);
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
  getItemFromCart,
  addItemToCart,
  deleteACartItem,
  deleteAllItemInCart,
} = cartSlice.actions;
export default cartSlice.reducer;
