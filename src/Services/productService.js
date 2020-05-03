import axios from "axios";

export default {
  getProducts() {
    return axios.get("../Mocks/products.json");
  },
};
