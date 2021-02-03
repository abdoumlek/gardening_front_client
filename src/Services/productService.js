import axios from "axios";

export default {
  getProducts() {
    let route = process.env.REACT_APP_BACKEND_URL + "/products/user";
    return axios.get(route);
  },
};
