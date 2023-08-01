import api from "../../../utils/api";

const verifyOtb = async (code) => {
  const response = await api.post("/user/verify", { code });

  return response.data;
};

const logOut = async () => {
  const response = await api.post("/user/logout");

  return response.data;
};

const userService = { verifyOtb, logOut };

export default userService;
