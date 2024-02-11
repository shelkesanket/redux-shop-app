import { ActionTypes } from "../constants/action-types";

const initialState = {
  id: 1,
  name: "Sanket",
};

export const productReducer = (state = { initialState }, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
