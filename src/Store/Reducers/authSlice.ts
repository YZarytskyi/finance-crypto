import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../Types/Types';

interface AuthState {
  user: Partial<User>;
  modalShow: boolean;
  toggleLoginSignUp: boolean;
}

const initialState: AuthState = {
  user: {},
  modalShow: false,
  toggleLoginSignUp: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload
    },
    setModalShow(state, action) {
      state.modalShow = action.payload
    },
    setToggleLoginSignUp(state, action) {
      state.toggleLoginSignUp = action.payload
    },
  },
})

export const { setCurrentUser, setModalShow, setToggleLoginSignUp } = authSlice.actions

export default authSlice.reducer