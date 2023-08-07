import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingService from "./settingService";
import { errHandler } from "../../../utils/helpers";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  settings: null,
};

export const getUserSetting = createAsyncThunk(
  "/setting/get",
  async (thunkApi) => {
    try {
      return await settingService.getUserSetting();
    } catch (error) {
      error = errHandler(error);
      return thunkApi.rejectWithValue(error);
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
