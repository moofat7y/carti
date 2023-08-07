import api from "../../../utils/api";

const getProducts = async () => {
  const response = await api.get(`/all-products`);

  return response.data;
};

const productServices = { getProducts };

export default productServices;
