import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reportsService from "./reportService";
import { notifySuccess } from "../../../utils/notifies";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  from: 1,
  to: 1,
  current: 1,
  reports: [],
};

export const getReports = createAsyncThunk(
  "/complaints/get",
  async ({ page }, thunkApi) => {
    try {
      return await reportsService.getReports(page);
      // console.log();
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateReport = createAsyncThunk(
  "/complaints/update",
  async ({ ids, status }, thunkApi) => {
    try {
      const res = await Promise.all(
        ids.map((id) => reportsService.updateReport(id, status))
      );
      notifySuccess("تم التحديث ");
      const state = thunkApi.getState();
      const page = state.report.current;
      await thunkApi.dispatch(getReports({ page: page }));
      return;
    } catch (error) {
      console.log(error);
    }
  }
);

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReports.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reports = action.payload.data;
        state.from = action.payload.from;
        state.to = action.payload.last_page;
        state.current = action?.payload?.current_page || 1;
        state.isSuccess = true;
      })
      .addCase(getReports.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export default reportSlice.reducer;
