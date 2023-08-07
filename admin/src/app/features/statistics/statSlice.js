import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statisticsService from "./statService";
import { errHandler } from "../../../utils/helpers";

const initialState = {
  isLoading: false,
  isSucess: false,
  isError: false,
  stat: {
    orders_count: 0,
    orders_total_price: 0,
    product_count: 0,
    products_total_price: 0,
  },
};

export const getStatistics = createAsyncThunk(
  "/statistics",
  async (thunkApi) => {
    try {
      return await statisticsService.getStatistics();
    } catch (error) {
      errHandler(error);
      thunkApi.rejectWithValue(error);
    }
  }
);

const statisticsSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.stat = action.payload;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default statisticsSlice.reducer;
