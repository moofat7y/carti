import api from "../../../utils/api";

const getCart = async () => {
  const response = await api.get("/cart");

  return response.data;
};

const createCart = async (data) => {
  const response = await api.post("/cart", { products: data });
  return response.data;
};

const cartService = { getCart, createCart };

export default cartService;
