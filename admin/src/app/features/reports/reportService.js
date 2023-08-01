import api from "../../../utils/api";

const getReports = async (page) => {
  const response = await api.get(`/complaints?page=${page ? page : 1}`);

  return response.data;
};

const updateReport = async (id, status) => {
  const formData = new FormData();
  formData.append("_method", "PUT");
  formData.append("status", status);
  const response = await api.post(`/complaints/${id}`, formData);
  return response.data;
};

const reportsService = { getReports, updateReport };

export default reportsService;
