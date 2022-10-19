import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../Types/Types';

interface AuthState {
  user: Partial<User>;
}

const initialState: AuthState = {
  user: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload
    },
  },
})

export const { setCurrentUser } = authSlice.actions

export default authSlice.reducer