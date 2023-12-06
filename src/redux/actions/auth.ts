import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/supabase";

const getSession = createAsyncThunk(
  "auth/getSession",
  async (_, thunkAPI) => {
    const { data, error } = await supabase.auth.getUser()
    if (!!error?.message) {
      return thunkAPI.rejectWithValue(error?.message);
    }
    return data;
  }
)

const signInWithPassword = createAsyncThunk(
  "auth/signInWithPassword",
  async (data: any, thunkAPI) => {
    const { email, password } = data;
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!!error?.message) {
      return thunkAPI.rejectWithValue(error?.message);
    }
    return user;
  }
);

const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, thunkAPI) => {
    const { error } = await supabase.auth.signOut();
    if (!!error?.message) {
      return thunkAPI.rejectWithValue(error?.message);
    }
    return null;
  }
)

export { getSession, signInWithPassword, signOut };