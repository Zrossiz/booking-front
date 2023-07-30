import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  email: string;
  password?: string;
  isAuth?: boolean;
}

const initialState: AuthState = {
  email: "",
  password: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.isAuth = action.payload.isAuth;
      state.email = action.payload.email;
    },
  },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
