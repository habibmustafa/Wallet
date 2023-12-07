import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUser, signInWithPassword, signOut, signUp } from "../actions/auth";

const initialState: any = {
  // auth
  isAuth: null,
  loading: false,
  user: null,
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
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.isAuth = true;
      state.user = action?.payload?.user_metadata
    });
    builder.addCase(getUser.rejected, (state, _action) => {
      state.isAuth = false;
    });
    
    // Login
    builder.addCase(signInWithPassword.fulfilled, (state, action: PayloadAction<any>) => {
      state.isAuth = true;
      state.user = action.payload.user.user_metadata
      console.log(action.payload);
      
      // const { user } = action.payload;
    });
    builder.addCase(signInWithPassword.rejected, (state, _action) => {
      state.isAuth = false;
    });

    // builder.addCase(signInWithOAuth.fulfilled, (state, action: PayloadAction<any>) => {
    //   console.log(action.payload);
    // });
    // builder.addCase(signInWithOAuth.rejected, (state, _action) => {
    // });


    // signUp
    builder.addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
      state.isAuth = true;
      state.user = action.payload.user.user_metadata
      // const { user } = action.payload;
    });
    builder.addCase(signUp.rejected, (state, _action) => {
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
