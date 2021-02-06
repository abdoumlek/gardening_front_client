import * as actionTypes from "./CartActionTypes";

export const addProduct = (product, count) => ({
  type: actionTypes.ADD_PRODUCT,
  payload: { product, count },
});

export const removeProduct = (product, count) => ({
  type: actionTypes.REMOVE_PRODUCT,
  payload: { product, count },
});

export const setUserInformations = (name, phoneNumber, address) => ({
  type: actionTypes.SET_USER_INFORMATIONS,
  payload: { name, phoneNumber, address },
});

export const reset = () => ({
  type: actionTypes.RESET,
  payload: null,
});
