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
  },
});

export const { logOut } = auth.actions;
export default auth.reducer;
