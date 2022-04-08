import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

const authSlice = createReducer({
  name: "auth",
  initialState,
  reducers: {
    phone() {},
  },
});
