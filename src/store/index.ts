import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { State, reducer, initialState } from "../reducers";

let persistedState = initialState;
let storedData = localStorage.getItem('reduxState');
if (typeof storedData === 'string') {
    persistedState = JSON.parse(storedData);
}
const store = createStore(reducer, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
