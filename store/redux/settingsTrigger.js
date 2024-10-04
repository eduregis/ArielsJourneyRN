import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "counter",
  initialState: {
    value: true,
  },
  reducers: {
    trigger: (state) => {
      state.value = -state.value;
    },
  },
});

export const { trigger } = settingsSlice.actions;

export default settingsSlice.reducer;
