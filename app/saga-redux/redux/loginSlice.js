import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: [],
    isLoading: false,
    loginSuccess: false,
    isAuthLoading: false,
  },
  reducers: {
    getLoginFetch: (state) => {
      state.isLoading = true;
      state.loginSuccess = false;
      state.loginMsg = "";
    },
    getLoginSuccess: (state, action) => {
      state.isLoading = false;
      state.loginSuccess = true;
      state.loginMsg = "logged in successfully";
      localStorage.setItem(
        "loginData",
        JSON.stringify({
          token: action.payload,
        })
      );
    },
    getLoginFailure: (state, action) => {
      state.isLoading = false;
      state.loginMsg = "Auth Failed";
      state.loginSuccess = false;
    },
    getUserTokenAuth: (state) => {
      state.isAuthLoading = true;
    },
    getUserTokenAuthSuccess: (state, action) => {
      console.log("getUserTokenAuthSuccess");
    },
    getUserTokenAuthFailure: (state, action) => {
      console.log("getUserTokenAuthFailure");
    },
  },
});

export const {
  getUserRefTokenAuth,
  getUserRefTokeAuthSuccess,
  getUserRefTokeFailure,
  getLoginFetch,
  getLoginSuccess,
  getLoginFailure,
  getUserTokenAuth,
  getUserTokenAuthSuccess,
  getUserTokenAuthFailure,
} = loginSlice.actions;
export default loginSlice.reducer;
