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
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === payload.id;
      });
      cartItem.amount = cartItem + 1;
    },
  },
});
// console.log("cartslice log",cartSlice);

export const { clearCart, removeItem, increase } = cartSlice.actions;

export default cartSlice.reducer;
