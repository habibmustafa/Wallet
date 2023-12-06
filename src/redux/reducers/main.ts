import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // main
  popUps: {
    addTransaction: false,
  },
  isLoading: false,
};
const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    togglePopUp(state: any, { payload }) {
      state.popUps[payload] = !state.popUps[payload];
    },
    setIsLoading(state: any, { payload }) {
      state.isLoading = payload;
    }
  },
  extraReducers: () => {},
});

export const { togglePopUp, setIsLoading } = main.actions;
export default main.reducer;
