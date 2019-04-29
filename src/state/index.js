import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import auth from "./auth";
import rsvp from "./rsvp";

export const rootReducer = combineReducers({ auth, rsvp });
export const store = createStore(rootReducer, applyMiddleware(...[thunk, logger]));
