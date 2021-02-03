import { createStore } from "redux";
import * as actionTypes from "./CartActionTypes";

const initialState = {
  cartItems: [], //{product, count}
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT: {
      const { count, product } = action.payload;
      if (
        state.cartItems.filter((c) => c.product.id === product.id).length <= 0
      )
        return {
          cartItems: [...state.cartItems, { product, count }],
        };
      else {
        const element = state.cartItems.find(
          (c) => c.product.id === product.id
        );
        element.count += count;
        return {
          cartItems: [...state.cartItems],
        };
      }
    }
    case actionTypes.REMOVE_PRODUCT: {
      const { count, product } = action.payload;
      const element = state.cartItems.find((c) => c.product.id === product.id);
      if (element.count <= count)
        return {
          cartItems: state.cartItems.filter((c) => c.product.id !== product.id),
        };
      else {
        element.count -= count;
        return { cartItems: [...state.cartItems] };
      }
    }
    case actionTypes.RESET : {
          return initialState;
    }
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;
