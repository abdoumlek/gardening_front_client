import axios from "axios";

export default {
  getGalleries() {
    let route = process.env.REACT_APP_BACKEND_URL + "/galleries";
    return axios.get(route);
  },
};
