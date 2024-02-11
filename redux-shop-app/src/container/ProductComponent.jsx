import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const prodcuts = useSelector((state) => state);

  return <div>ProductComponent</div>;
}; 

export default ProductComponent;
