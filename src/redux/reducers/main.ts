import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // main
  popUps: {
    addTransaction: false,
  },
};
const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    togglePopUp(state: any, { payload }) {
      state.popUps[payload] = !state.popUps[payload];
    },
  },
  extraReducers: () => {},
});

export const { togglePopUp } = main.actions;
export default main.reducer;
