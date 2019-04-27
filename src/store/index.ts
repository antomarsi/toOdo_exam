import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { reducer, initialState } from "../reducers";

let persistedState = initialState;
let storedData = localStorage.getItem("app");

if (typeof storedData === "string") {
  persistedState.todos = JSON.parse(storedData).todos;
}

const store = createStore(reducer, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  localStorage.setItem("app", JSON.stringify(store.getState()));
});

export default store;