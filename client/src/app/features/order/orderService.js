import api from "../../../utils/api";

const getOrders = async () => {
  const response = await api.get("/logged-user-orders");

  return response.data;
};

const createOrder = async (data) => {
  const response = await api.post("/orders", data);

  return response.data;
};

const orderService = { getOrders, createOrder };

export default orderService;
