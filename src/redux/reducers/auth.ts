import { createSlice } from "@reduxjs/toolkit";
import { getSession, signInWithPassword, signOut } from "../actions/auth";

const initialState: any = {
  // auth
  isAuth: null,
  loading: false,
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state: any) {
      state.isAuth = false;
    },
    setLogin(state: any) {
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    // Session
    builder.addCase(getSession.fulfilled, (state, _action) => {
      state.isAuth = true;
    });
    builder.addCase(getSession.rejected, (state, _action) => {
      state.isAuth = false;
    });
    
    // Login
    builder.addCase(signInWithPassword.fulfilled, (state, _action) => {
      state.isAuth = true;
      // const { user } = action.payload;
    });
    builder.addCase(signInWithPassword.rejected, (state, _action) => {
      state.isAuth = false;
    });

    // LogOut
    builder.addCase(signOut.fulfilled, (state, _action) => {
      state.isAuth = false;
    });
    builder.addCase(signOut.rejected, (_state, _action) => {
    });
  },
});

export const { logOut, setLogin } = auth.actions;
export default auth.reducer;
