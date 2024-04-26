import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserEntity } from "../entities/user.entity";

interface UserState {
  isAuthenticated: boolean;
  user: null | UserEntity;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user")!)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserEntity>) {
      window.localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      window.localStorage.removeItem("user");
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
