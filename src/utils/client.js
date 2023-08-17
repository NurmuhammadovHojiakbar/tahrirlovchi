import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: "json",
  withCredentials: true,
  // httpsAgent: new (require("https").Agent)({
  //   rejectUnauthorized: false,
  // }),
});

export default client;
