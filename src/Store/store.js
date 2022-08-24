import { configureStore, combineReducers } from '@reduxjs/toolkit'
import articlesReducer from './Reducers/articlesSlice'
import cryptoReducer from './Reducers/cryptoSlice'

const rootReducer = combineReducers({
  articles: articlesReducer,
  crypto: cryptoReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})