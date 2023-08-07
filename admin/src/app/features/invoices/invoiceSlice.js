import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invoiceServices from "./invoiceService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  from: 1,
  to: 1,
  current: 1,
  invoices: [],
};

export const getInvoices = createAsyncThunk(
  "/invoice",
  async ({ page }, thunkApi) => {
    try {
      return await invoiceServices.getInvoices(page);
    } catch (error) {
      console.log(error);
    }
  }
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInvoices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInvoices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.invoices = action.payload.data;
        state.from = action.payload.from;
        state.to = action.payload.last_page;
        state.current = action?.payload?.current_page || 1;
      })
      .addCase(getInvoices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default invoiceSlice.reducer;
