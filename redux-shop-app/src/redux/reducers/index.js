import { combineReducers } from "redux";
import {
  addToCartReducer,
  productsReducer,
  selectedProductsReducer,
} from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: addToCartReducer,
});
export default reducers;
