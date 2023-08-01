import api from "../../../utils/api";

const getOrders = async (page) => {
  const response = await api.get(`/orders`);
  return response.data;
};
const updateOrder = async (id, status) => {
  const formData = new FormData();
  formData.append("status", status);
  formData.append("_method", "PUT");
  const response = await api.post(`/orders/${id}`, formData);

  return response.data;
};

const deleteOrder = async (id) => {
  const response = await api.delete(`/order/${id}`);
  return response.data;
};

const orderService = { getOrders, updateOrder, deleteOrder };

export default orderService;
