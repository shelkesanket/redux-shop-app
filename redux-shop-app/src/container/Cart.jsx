import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="ui grid container">
      {/* <h1>Cart Item</h1> */}
      <div>
        {cartItems.map((item) => {
          return (
            <li>
              {item.title} and price is {item.price}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
