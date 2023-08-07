import api from "../../../utils/api";

const getStatistics = async () => {
  const response = await api.get("https://api.cartyi.com/api/v1/get-status");
  return response.data;
};

const statisticsService = { getStatistics };

export default statisticsService;
