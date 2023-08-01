import api from "../../../utils/api";

const getCategories = async (page) => {
  const res = await api.get(`/categories?page=${page ? page : 1}`);
  return res.data;
};

const createCategory = async (name) => {
  const res = await api.post("/categories", { name });
  return res.data;
};

const editCategory = async (id, name) => {
  const res = await api.put(`/categories/${id}`, { name });

  return res.data;
};

const deleteCategory = async (id) => {
  const res = await api.delete(`/categories/${id}`);
  return res.data;
};

const categoryService = {
  createCategory,
  getCategories,
  editCategory,
  deleteCategory,
};

export default categoryService;
