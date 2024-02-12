import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <NavLink to="/">
          <h2>Redux Shop</h2>
        </NavLink>
      </div>
      <NavLink to="/cartDetails">Cart Items </NavLink>
    </div>
  );
};

export default Header;
