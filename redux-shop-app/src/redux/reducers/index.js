import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({ allProducts: productReducer });
export default reducers;
