import axios from "axios";

export default {
  sendMessage(message) {
    let route = process.env.REACT_APP_BACKEND_URL + "/messages";
    return axios.post(route, message);
  },
};
