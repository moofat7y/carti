import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_API_URL;

const api = axios.create({
  baseURL: "https://cartyi.com/api/v1/",
});
api.interceptors.request.use(
  (req) => {
    const userToken = JSON.parse(window.localStorage.getItem("token"));

    userToken ? (req.headers["Authorization"] = "Bearer " + userToken) : "";
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default api;
