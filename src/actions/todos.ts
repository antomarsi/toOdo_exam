import Todo from '../models/Todo';
export enum ActionTypes {
    ADD_TODO = '@todos/ADD_TODO',
    TOGGLE_TODO = '@todos/TOGGLE_TODO'
}

let nextId = 0;
export interface AddTodoAction {type: ActionTypes.ADD_TODO, payload: {todo: Todo}}
export interface ToggleTodoAction {type: ActionTypes.TOGGLE_TODO, payload: {id: number}}

export const addTodo = (name: string) : AddTodoAction => {
    return {type:ActionTypes.ADD_TODO, payload: {todo: {id: nextId++, name, completed: false}}}
}
export const toggleTodo = (id: number) : ToggleTodoAction => {
    return {type: ActionTypes.TOGGLE_TODO, payload: {id}};
}

export type Action = AddTodoAction | ToggleTodoAction;