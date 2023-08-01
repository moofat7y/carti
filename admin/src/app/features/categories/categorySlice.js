import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifySuccess } from "../../../utils/notifies";
import categoryService from "./categoyService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  from: 1,
  to: 1,
  current: 1,
  categories: [],
};

export const getCategories = createAsyncThunk(
  "/category",
  async ({ page }, thunkApi) => {
    try {
      return await categoryService.getCategories(page);
    } catch (error) {
      console.log(error);
    }
  }
);

export const createCategory = createAsyncThunk(
  "/category/create",
  async ({ name }, thunkApi) => {
    try {
      const res = await categoryService.createCategory(name);
      notifySuccess(" تم اضافة الصنف بنجاح");
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editCategory = createAsyncThunk(
  "/category/edit",
  async ({ id, name }, thunkApi) => {
    try {
      const res = await categoryService.editCategory(id, name);
      notifySuccess("تم تعديل الصنف");
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "/category/delete",
  async ({ id }, thunkApi) => {
    try {
      const res = await categoryService.deleteCategory(id);
      const state = thunkApi.getState();
      const page = state.category.current;
      console.log(page);
      await thunkApi.dispatch(getCategories({ page: page }));
      notifySuccess("تم حذف الصنف");
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload.data;
        state.from = action.payload.from;
        state.to = action.payload.last_page;
        state.current = action.payload.current_page;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.to =
          [action.payload, ...state.categories].length / state.to > 20
            ? (state.to += 1)
            : state.to;
        state.categories = [action.payload, ...state.categories.slice(0, 19)];
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map((cat) =>
          cat.id === action.meta.arg.id
            ? { ...cat, name: action.meta.arg.name }
            : cat
        );
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = state.categories.filter(
          (cat) => cat.id !== action.meta.arg.id
        );
      });
  },
});

export default categorySlice.reducer;
