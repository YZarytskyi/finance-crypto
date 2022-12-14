import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./Reducers/articlesSlice";
import cryptoReducer from "./Reducers/cryptoSlice";
import exchangeReducer from "./Reducers/exchangeSlice";
import arbitrageReducer from "./Reducers/arbitrageSlice";
import converterReducer from "./Reducers/converterSlice";
import authReducer from "./Reducers/authSlice";
import appReducer from "./Reducers/appSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    crypto: cryptoReducer,
    exchange: exchangeReducer,
    arbitrage: arbitrageReducer,
    converter: converterReducer,
    auth: authReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
