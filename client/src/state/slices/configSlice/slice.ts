import { createSlice } from "@reduxjs/toolkit";

interface ConfigState {
  theme: string;
}

const initialState: ConfigState = {
  theme: "light",
};

const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = configSlice.actions;
export default configSlice.reducer;
