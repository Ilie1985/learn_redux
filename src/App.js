import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import { getCartItems } from "./features/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((store) => {
    return store.cart;
  });

  const { isOpen } = useSelector((store) => {
    return store.modal;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());

    //eslint-disable-next-line
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));

    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
