import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logIn, register, logOut, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "auth",  
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            })
          .addCase(logOut.fulfilled, () => {
        return initialState;
          })
          .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
          })
          .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isRefreshing = false;
            state.isLoggedIn = true;
            })
            .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
        state.isLoading = true;
            })
            .addMatcher(isAnyOf(register.rejected, logIn.rejected), (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    }
});

export default slice.reducer;