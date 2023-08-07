import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_API_URL;
// const token = JSON.parse(window.localStorage.getItem("token"));
const api = axios.create({
  baseURL: "https://api.cartyi.com/api/v1/",
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

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const status = err.response ? err.response.status : null;
    if (status === 401 && err?.response?.data?.message === "Unauthenticated.") {
      window.localStorage.clear();
      window.location.replace("/");
    }
    throw err;
  }
);

export default api;
