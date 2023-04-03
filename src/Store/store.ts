import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import articlesReducer from './Reducers/articlesSlice'
import cryptoReducer from './Reducers/cryptoSlice'
import exchangeReducer from './Reducers/exchangeSlice'
import arbitrageReducer from './Reducers/arbitrageSlice'
import converterReducer from './Reducers/converterSlice'
import authReducer from './Reducers/authSlice'
import appReducer from './Reducers/appSlice'

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  articles: articlesReducer,
  crypto: cryptoReducer,
  exchange: exchangeReducer,
  arbitrage: arbitrageReducer,
  converter: converterReducer,
  auth: authReducer,
  app: appReducer,
})
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
