import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import {reducers} from './Reducers/index'
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store