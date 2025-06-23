import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  IsDarkMode: boolean;
  IsSidebarCollapsed: boolean;
}

const initialState: InitialStateTypes = {
  IsDarkMode: false,
  IsSidebarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.IsSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.IsDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode, setIsSidebarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;
