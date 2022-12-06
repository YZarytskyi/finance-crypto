import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  isInitialized: boolean;
}

const initialState: AuthState = {
  isInitialized: false,
}

export const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializedSuccess(state) {
      state.isInitialized = true;
    },
  },
});

export const { initializedSuccess } = appSlice.actions;

export default appSlice.reducer;