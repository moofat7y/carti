import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";
import { notifySuccess } from "../../../utils/notifies";
import { resetCart } from "../cart/cartSlice";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  orders: [],
};

export const getOrders = createAsyncThunk("/orders/get", async (thunkApi) => {
  try {
    const res = await orderService.getOrders();
    const orders = res.map((order) => order[0]);
    return orders;
  } catch (error) {
    console.log(error);
  }
});

export const createOrder = createAsyncThunk(
  "/order/create",
  async ({ data, navigate }, thunkApi) => {
    try {
      const response = await orderService.createOrder(data);
      navigate("/store");
      thunkApi.dispatch(resetCart());
      notifySuccess(response.message);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders = [...state.orders, action.payload];
      });
  },
});

export default orderSlice.reducer;
