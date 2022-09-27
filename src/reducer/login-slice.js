import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../API/LoginAPI";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  token: "",
  actions: new Date().getTime(),
};

export const usersLogin = createAsyncThunk(
  "users/login",
  async ({ username, password }) => {
    const token = await loginUser({ username, password });
    return token;
  }
);

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(usersLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("authorization", action.payload.token);
      });
  },
});
