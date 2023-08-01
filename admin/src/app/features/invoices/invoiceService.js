import api from "../../../utils/api";

const getInvoices = async (page) => {
  const response = await api.get(`/invoice?page=${page ? page : 1}`);

  return response.data;
};

const invoiceService = { getInvoices };

export default invoiceService;
