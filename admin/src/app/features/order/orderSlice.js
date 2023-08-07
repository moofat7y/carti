import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifySuccess } from "../../../utils/notifies";
import orderServices from "./orderService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  from: 1,
  to: 1,
  current: 1,
  orders: [],
};

export const getOrders = createAsyncThunk(
  "/order",
  async ({ page }, thunkApi) => {
    try {
      const res = await orderServices.getOrders(page);
      // console.log(res);

      // if (res.length > 0) {
      //   const newOrders = res?.map((order) => order[0]);
      //   return newOrders;
      // } else {
      //   return [];
      // }

      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "/order/update",
  async ({ ids, status }, thunkApi) => {
    try {
      const res = await Promise.all(
        ids.map((id) => orderServices.updateOrder(id, status))
      );
      notifySuccess("تم تحديث الطلب");
      const state = thunkApi.getState();
      const page = state.order.current;
      await thunkApi.dispatch(getOrders({ page: page }));
      return;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "/order/delete",
  async ({ id }, thunkApi) => {
    try {
      const res = await orderServices.deleteOrder(id);
      const state = thunkApi.getState();
      const page = state.order.current;
      console.log(page);
      await thunkApi.dispatch(getOrders({ page: page }));
      notifySuccess(res.message);
      return res;
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
        state.isError = true;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.orders = state.orders.map((order) =>
          order.id === action.meta.arg.id
            ? { ...order, status: action.meta.arg.status }
            : order
        );
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = state.orders.filter(
          (order) => order.id !== action.meta.arg.id
        );
      });
  },
});

export default orderSlice.reducer;
