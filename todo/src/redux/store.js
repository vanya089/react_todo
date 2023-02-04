import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import todoInitialState from "./todo/TodoinitialState";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import authInitialState from "./auth/authInitialState";

export const globalInitialState = {
  auth:	authInitialState,
  todo: todoInitialState,
}

const middlewareEnchanter = applyMiddleware(thunk);

export const store = createStore(rootReducer, globalInitialState, composeWithDevTools(middlewareEnchanter))