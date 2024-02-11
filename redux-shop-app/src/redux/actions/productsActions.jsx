import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (prodcut) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: prodcut,
  };
};
