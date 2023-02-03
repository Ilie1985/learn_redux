import { createSlice } from "@reduxjs/toolkit";
import { computeHeadingLevel } from "@testing-library/react";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
  },
});
// console.log("cartslice log",cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
