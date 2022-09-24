import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./Reducers/articlesSlice";
import cryptoReducer from "./Reducers/cryptoSlice";
import converterReducer from "./Reducers/converterSlice";
import arbitrageReducer from "./Reducers/arbitrageSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    crypto: cryptoReducer,
    arbitrage: arbitrageReducer,
    converter: converterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
