import api from "../../../utils/api";

const getProducts = async (page) => {
  const response = await api.get(`products?page=${page ? page : 1}`);

  return response.data;
};

const createProduct = async (data) => {
  const response = await api.post("/products", data);

  return response.data;
};

const updateProduct = async (id, data) => {
  const response = await api.post(`/products/${id}`, data);

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

const productServices = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productServices;
