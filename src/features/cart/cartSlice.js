import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});
// console.log("cartslice log",cartSlice);


export default cartSlice.reducer