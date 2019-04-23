import { Reducer } from 'redux';
import {
    TodoActions,
    TodoActionTypes,
} from '../actions/TodoActions';

export interface ITodo {
    name: string;
}

export interface ITodoState {
    readonly todos: ITodo[];
}

const initialTodoState: ITodoState = {
    todos: [],
}

export const todoReducer: Reducer<ITodoState, TodoActions> = (state = initialTodoState, action) => {
    switch (action.type) {
        case TodoActionTypes.GET_ALL:
            return {...state, todos: action.todos};
        default:
            return state;
    }
}