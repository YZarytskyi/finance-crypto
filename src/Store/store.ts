import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./Reducers/articlesSlice";
import cryptoReducer from "./Reducers/cryptoSlice";
import arbitrageReducer from "./Reducers/arbitrageSlice";
import converterReducer from "./Reducers/converterSlice";
import authReducer from "./Reducers/authSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    crypto: cryptoReducer,
    arbitrage: arbitrageReducer,
    converter: converterReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
