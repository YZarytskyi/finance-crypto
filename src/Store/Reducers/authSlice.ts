import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  modalShow: boolean;
  toggleLoginSignUp: boolean;
  isAuth: boolean;
}

const initialState: AuthState = {
  modalShow: false,
  toggleLoginSignUp: false,
  isAuth: false,
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
    setIsAuth(state, action) {
      state.isAuth = action.payload
    },
  },
})

export const { setModalShow, setToggleLoginSignUp, setIsAuth } = authSlice.actions

export default authSlice.reducer