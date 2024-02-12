import React from "react";
import { useSelector } from "react-redux";

const CartDetails = () => {
  let cart = useSelector((state) => state.cart.products);

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      {cart?.products?.category}
    </div>
  );
};

export default CartDetails;
