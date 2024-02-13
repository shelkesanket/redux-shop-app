import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";
import CartDetails from "./container/CartDetails";
import Cart from "./container/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route path="/cartDetails" exact element={<CartDetails />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
