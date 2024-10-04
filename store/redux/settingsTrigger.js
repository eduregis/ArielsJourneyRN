import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "trigger",
  initialState: {
    value: true,
  },
  reducers: {
    openSettings: (state) => {
      state.value = true;
      console.log("open");
    },
    closeSettings: (state) => {
      state.value = false;
      console.log("close");
    },
  },
});

export const { openSettings, closeSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
