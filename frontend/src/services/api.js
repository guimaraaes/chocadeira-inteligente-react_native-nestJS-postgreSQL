import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.0.2.2:9000",
  baseURL: "http://192.168.1.10:9000",
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "*/*",
  // },
});

export default api;
