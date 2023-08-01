import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifySuccess } from "../../../utils/notifies";
import productServices from "./productService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  from: 1,
  to: 1,
  current: 1,
  products: [],
};

export const getProducts = createAsyncThunk(
  "/product",
  async ({ page }, thunkApi) => {
    try {
      return await productServices.getProducts(page);
    } catch (error) {
      console.log(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "/product/create",
  async ({ data }, thunkApi) => {
    try {
      const res = await productServices.createProduct(data);
      console.log(res);
      notifySuccess(res.message);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "/product/update",
  async ({ id, data }, thunkApi) => {
    try {
      const res = await productServices.updateProduct(id, data);
      console.log(res);
      notifySuccess("تم تعديل المنتج");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "/product/delete",
  async ({ ids }, thunkApi) => {
    try {
      await Promise.all(
        ids.map((id) => {
          productServices.deleteProduct(id);
        })
      );
      const state = thunkApi.getState();
      const page = state.product.current;
      console.log(ids);
      await thunkApi.dispatch(getProducts({ page: page }));
      notifySuccess("تم الحذف");
      return;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
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
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.meta.arg.id ? action.payload : product
        );
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.to =
          [action.payload, ...state.products].length / state.to > 20
            ? (state.to += 1)
            : state.to;
        state.products = [action.payload, ...state.products.slice(0, 19)];
      });
  },
});

export default productSlice.reducer;
