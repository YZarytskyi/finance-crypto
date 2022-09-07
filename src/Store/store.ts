import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './Reducers/articlesSlice'
import cryptoReducer from './Reducers/cryptoSlice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    crypto: cryptoReducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
