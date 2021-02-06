import axios from "axios";

export default {
  sendOrder(message) {
    let route = process.env.REACT_APP_BACKEND_URL + "/orders";
    return axios.post(route, message);
  },
};
