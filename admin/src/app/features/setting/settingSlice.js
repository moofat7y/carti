import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingService from "./settingService";
import { notifySuccess } from "../../../utils/notifies";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  settings: null,
};

export const getUserSetting = createAsyncThunk(
  "/setting/get",
  async ({}, thunkApi) => {
    try {
      return await settingService.getUserSetting();
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUserSetting = createAsyncThunk(
  "/setting/update",
  async ({ data, navigate }, thunkApi) => {
    try {
      const response = await settingService.updateUserSetting(data);
      navigate("/");
      notifySuccess("لقد تم حفظ بياناتك بنجاح");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserSetting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserSetting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.settings = action.payload;
        state.isSuccess = true;
      })
      .addCase(getUserSetting.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.settings = action.payload;
      })
      .addCase(updateUserSetting.fulfilled, (state, action) => {
        state.settings = action.payload;
      });
  },
});

export default settingSlice.reducer;
