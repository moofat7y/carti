import api from "../../../utils/api";

const getProducts = async (page) => {
  const response = await api.get(`/products?page=${page ? page : 1}`);

  return response.data;
};

const productServices = { getProducts };

export default productServices;
