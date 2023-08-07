import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productServices from "./productService";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  from: 1,
  to: 1,
  current: 1,
  products: [],
  message: "",
};

export const getProducts = createAsyncThunk("products/", async (thunkAPI) => {
  try {
    const response = await productServices.getProducts();
    return response;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload.data;
        state.from = action.payload.from;
        state.to = action.payload.last_page;
        state.current = action.payload.current_page;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;
