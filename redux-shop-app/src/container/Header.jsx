import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items.length);
  console.log(cartItems);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <NavLink to="/">
          <h2>Redux Shop</h2>
        </NavLink>
      </div>
      <NavLink to="/cartDetails">Cart Items </NavLink>
      <NavLink to="/cart" className="cart">
        Cart {cartItems}
      </NavLink>
    </div>
  );
};

export default Header;
