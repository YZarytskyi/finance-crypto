import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  modalShow: boolean;
  toggleLoginSignUp: boolean;
}

const initialState: AuthState = {
  modalShow: false,
  toggleLoginSignUp: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setModalShow(state, action) {
      state.modalShow = action.payload
    },
    setToggleLoginSignUp(state, action) {
      state.toggleLoginSignUp = action.payload
    },
  },
})

export const { setModalShow, setToggleLoginSignUp } = authSlice.actions

export default authSlice.reducer