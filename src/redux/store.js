import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { messagesReducer } from "./reducers";
import { users } from "./reducers/userReducer";
const rootEducer = combineReducers({
    messages:messagesReducer,
    users:users
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store  = createStore(rootEducer,composeEnhancer(applyMiddleware(thunk)))
