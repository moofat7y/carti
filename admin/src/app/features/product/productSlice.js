import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifyError, notifySuccess } from "../../../utils/notifies";
import productServices from "./productService";
import { errHandler } from "../../../utils/helpers";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  from: 1,
  to: 1,
  current: 1,
  newProducts: [],
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
  async ({ data, newProdId }, thunkApi) => {
    try {
      const res = await productServices.createProduct(data);
      notifySuccess(res.message);
      return res.data;
    } catch (error) {
      console.log(error);
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "/product/update",
  async ({ id, data }, thunkApi) => {
    try {
      console.log(id);
      const res = await productServices.updateProduct(id, data);
      notifySuccess(res.message);
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateProductImage = createAsyncThunk(
  "/product/updateImage",
  async ({ data, id }, thunkApi) => {
    try {
      const res = await productServices.updateProductImage(data);
      console.log(res.data);
      notifySuccess("تم تعديل الصوره بنجاح");
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
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
  reducers: {
    addNewProduct: (state) => {
      if (state.newProducts.length > 4) {
        notifyError(
          "لقد وصلت الي الحد الاقصي من المنتجات يجب عليك حفظ المنتج اولا ثم المحاوله مره اخري"
        );
        return;
      }
      state.newProducts.push({
        id: Date.now(),
        name: "",
        price: null,
        qty: null,
        category_name: [],
      });
    },
    removeNewProduct: (state, action) => {
      state.newProducts = state.newProducts.filter(
        (prod) => prod.id !== action.payload
      );
    },
  },
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
        state.current = action?.payload?.current_page || 1;
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
      .addCase(updateProductImage.fulfilled, (state, action) => {
        console.log(action);
        state.products = state.products.map((prod) =>
          prod.id === action.meta.arg.id
            ? {
                ...prod,
                product_image: [...prod.product_image, action.payload],
              }
            : prod
        );
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.newProducts = state.newProducts.filter(
          (prod) => prod.id !== action.meta.arg.newProdId
        );
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

export const { addNewProduct, removeNewProduct } = productSlice.actions;
export default productSlice.reducer;
