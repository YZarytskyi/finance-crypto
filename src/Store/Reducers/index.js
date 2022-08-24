import { combineReducers } from "redux";
import { articlesReducer } from "./articlesSlice";
import { cryptoReducer } from "./cryptoSlice";

export const reducers = combineReducers({
  crypto: cryptoReducer,
  articles: articlesReducer,
})