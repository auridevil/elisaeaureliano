import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import auth from "./auth";

export const rootReducer = combineReducers({ auth });
export const store = createStore(rootReducer, applyMiddleware(...[thunk, logger]));
