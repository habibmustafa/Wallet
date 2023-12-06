import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/supabase";

const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  const { data, error } = await supabase.auth.getUser();
  if (!!error?.message) {
    return thunkAPI.rejectWithValue(error?.message);
  }
  return data.user;
});

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

const signUp = createAsyncThunk("auth/signUp", async (data: any, thunkAPI) => {
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

const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  const { error } = await supabase.auth.signOut();
  if (!!error?.message) {
    return thunkAPI.rejectWithValue(error?.message);
  }
  return null;
});

export { getUser, signInWithPassword, signUp, signOut };
