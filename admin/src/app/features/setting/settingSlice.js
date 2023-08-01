import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingService from "./settingService";

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
  async ({ data }, thunkApi) => {
    try {
      const response = await settingService.updateUserSetting(data);
      console.log(response);
      return;
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
      });
  },
});

export default settingSlice.reducer;
