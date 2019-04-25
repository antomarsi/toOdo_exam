import Todo from "../models/Todo";
export enum ActionTypes {
  ADD_TODO = "@todos/ADD_TODO",
  TOGGLE_TODO = "@todos/TOGGLE_TODO"
}

let nextId = 1;
export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: Todo };
}
export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { id: number };
}

export const addTodo = (
  name: string,
  completed: boolean = false
): AddTodoAction => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: { todo: { id: nextId++, name, completed } }
  };
};
export const toggleTodo = (id: number): ToggleTodoAction => {
  return { type: ActionTypes.TOGGLE_TODO, payload: { id } };
};

export type Action = AddTodoAction | ToggleTodoAction;
