import { ITodoState, todoReducer } from "./reducers/todoReducer";
import { combineReducers, Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export interface IAppState {
    todoState: ITodoState;
}

const rootReducer = combineReducers<IAppState>({
    todoState: todoReducer,
});

export default function configureStore(): Store<IAppState, any> {
    return createStore(rootReducer, undefined, applyMiddleware(thunk));
}