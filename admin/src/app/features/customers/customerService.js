import api from "../../../utils/api";

const getCustomers = async (page) => {
  const response = await api.get(`/users?page=${page ? page : "1"}`);

  return response.data;
};

const deleteCustomer = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

const customersService = { getCustomers, deleteCustomer };

export default customersService;
