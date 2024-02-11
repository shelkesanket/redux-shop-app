import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productsActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispacth = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispacth(setProducts(response?.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products0", products);
  return <div>ProductListing</div>;
};

export default ProductListing;
