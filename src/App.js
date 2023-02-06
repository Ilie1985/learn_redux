import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => {
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

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
