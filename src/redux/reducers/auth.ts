import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // auth
  isAuth: false,
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
    }
  },
});

export const { logOut, setLogin } = auth.actions;
export default auth.reducer;
