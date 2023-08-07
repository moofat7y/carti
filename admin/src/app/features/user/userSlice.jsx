import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { notifyError, notifySuccess } from "../../../utils/notifies";
import { toast } from "react-hot-toast";
import avatar from "/profile.png";
import { errHandler } from "../../../utils/helpers";
const userToken = JSON.parse(window.localStorage.getItem("token"));
const user = JSON.parse(window.localStorage.getItem("user"));

const initialState = {
  token: userToken || null,
  user: user || null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const login = createAsyncThunk(
  "/user/login",
  async ({ data, navigate }, thunkAPI) => {
    try {
      const res = await userService.login(data);
      notifySuccess(res.message);
      window.localStorage.setItem("token", JSON.stringify(res.token));
      window.localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
      return res;
    } catch (err) {
      err = errHandler(err);

      notifyError(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const verifyOtb = createAsyncThunk(
  "/user/verify",
  async ({ code, navigate }, thunkAPI) => {
    try {
      const res = await userService.verifyOtb(code);
      console.log(res);
      if (res.data) {
        window.localStorage.setItem("user", JSON.stringify(res.data));
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={res.data.image ? res.data.image : avatar}
                    alt=""
                  />
                </div>
                <div className="mr-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {`اهلا بعودتك ${res.data.name}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-l-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                اغلاق
              </button>
            </div>
          </div>
        ));
        navigate("/");
      }
      return res;
    } catch (error) {
      console.log(error);
      notifyError(error.response?.data?.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "/user/logout",
  async ({ navigate }, thunkAPI) => {
    try {
      const res = await userService.logOut();
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token");
      navigate("/auth/signin");
      notifySuccess(res.message);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyOtb.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOtb.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(verifyOtb.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;

        // console.log(action.payload);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export default userSlice.reducer;
