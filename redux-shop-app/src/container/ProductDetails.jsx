import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  setToCart,
  removeFromCart,
} from "../redux/actions/productsActions";
import "./Cart.css";
const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // Fetch product details
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        dispatch(selectedProduct(response.data));
      } catch (error) {
        console.log("Error fetching product details: ", error);
      }
    };

    if (productId && productId !== "") {
      fetchProductDetail();
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  // Add product to cart
  const handleAddToCart = () => {
    dispatch(setToCart(product));
    console.log("product in cart", product);
  };

  const handleRemoveCart = () => {
    dispatch(removeFromCart(product.id)); // Pass the product ID to removeFromCart action creator
  };

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="buttons">
                  <button onClick={handleAddToCart}>Add to Cart</button>

                  <button onClick={handleRemoveCart}>Remove Item</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
