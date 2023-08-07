import api from "../../../utils/api";
const user = JSON.parse(window.localStorage.getItem("user"));
const getUserSetting = async () => {
  const response = await api.get(`/settings/${user.id}`);

  return response.data;
};

const settingService = { getUserSetting };

export default settingService;
