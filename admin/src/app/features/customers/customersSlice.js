import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifySuccess } from "../../../utils/notifies";
import customerServices from "./customerService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  from: 1,
  to: 1,
  current: 1,
  customers: [],
};

export const getCustomers = createAsyncThunk(
  "/customer",
  async ({ page }, thunkApi) => {
    try {
      return await customerServices.getCustomers(page);
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "/customer/delete",
  async ({ ids }, thunkApi) => {
    try {
      await Promise.all(
        ids.map((id) => {
          customerServices.deleteCustomer(id);
        })
      );
      const state = thunkApi.getState();
      const page = state.customer.current;
      console.log(ids);
      await thunkApi.dispatch(getCustomers({ page: page }));
      notifySuccess("تم الحذف");
      return;
    } catch (error) {
      console.log(error);
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.customers = action.payload.data;
        state.from = action.payload.from;
        state.to = action.payload.last_page;
        state.current = action?.payload?.current_page || 1;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default customerSlice.reducer;
