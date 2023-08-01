import api from "../../../utils/api";
const user = JSON.parse(window.localStorage.getItem("user"));
const getUserSetting = async () => {
  const response = await api.get(`/settings/${user.id}`);

  return response.data;
};

const updateUserSetting = async (data) => {
  const response = await api.post(`/settings/${user.id}`, data);

  return response.data;
};

const settingService = { getUserSetting, updateUserSetting };

export default settingService;
