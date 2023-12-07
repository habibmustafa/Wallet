import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/supabase";

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  const { data, error } = await supabase.auth.getUser();
  if (!!error?.message) {
    return thunkAPI.rejectWithValue(error?.message);
  }
  return data.user;
});

export const signInWithPassword = createAsyncThunk(
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

export const signInWithOAuth = createAsyncThunk(
  "auth/signInWithOAuth",
  async (_, thunkAPI) => {
    const { data: user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      // options: {
      //   redirectTo: "https://yzlkrrfcpabevtqduurv.supabase.co/auth/v1/callback"
      // }
    });
    if (!!error?.message) {
      return thunkAPI.rejectWithValue(error?.message);
    }
    return user;
  }
);

export const signUp = createAsyncThunk("auth/signUp", async (data: any, thunkAPI) => {
  const { email, password } = data;
  const { data: user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: data.name,
      },
    },
  });
  if (!!error?.message) {
    return thunkAPI.rejectWithValue(error?.message);
  }
  return { user };
});

export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  const { error } = await supabase.auth.signOut();
  if (!!error?.message) {
    return thunkAPI.rejectWithValue(error?.message);
  }
  return null;
});