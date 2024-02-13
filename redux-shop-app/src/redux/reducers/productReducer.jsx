import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
};
const cartIntialState = {
  items: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addToCartReducer = (
  state = cartIntialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, items: [...state.items, payload] }; // Append payload to the existing items array
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload), // Filter out the item to remove
      };
    default:
      return state;
  }
};
