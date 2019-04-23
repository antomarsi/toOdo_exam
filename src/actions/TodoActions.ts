import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ITodo, ITodoState } from '../reducers/todoReducer';

export enum TodoActionTypes {
    GET_ALL = 'GET_ALL',
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    REMOVE = 'REMOVE'
}

export interface ITodoGetAllAction {
    type: TodoActionTypes.GET_ALL,
    todos: ITodo[];
}

export interface ITodoAddAction {
    type: TodoActionTypes.ADD
}

export type TodoActions = ITodoGetAllAction | ITodoAddAction;

export const addTodos: ActionCreator<ThunkAction<Promise<any>, ITodoState, null, ITodoAddAction>> = (todo) => {
    return async (dispatch: Dispatch) => {
        try {
            let listTodo = localStorage.getItem('listTodo');

            dispatch({
                todos: typeof listTodo === 'string' ? JSON.parse(listTodo) : [],
                type: TodoActionTypes.ADD
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export const getAllTodos: ActionCreator<ThunkAction<Promise<any>, ITodoState, null, ITodoGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        try {
            let listTodo = localStorage.getItem('listTodo');

            dispatch({
                todos: typeof listTodo === 'string' ? JSON.parse(listTodo) : [],
                type: TodoActionTypes.GET_ALL
            })
        } catch (err) {
            console.error(err);
        }
    }
}