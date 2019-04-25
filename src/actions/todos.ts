import Todo from "../models/Todo";
export enum ActionTypes {
  ADD_TODO = "@todos/ADD_TODO",
  UPDATE_TODO = "@todos/UPDATE_TODO",
  REMOVE_TODO = "@todos/REMOVE_TODO",
  TOGGLE_TODO = "@todos/TOGGLE_TODO"
}

let nextId = 1;
export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: Todo };
}

export interface UpdateTodoAction {
  type: ActionTypes.UPDATE_TODO;
  payload: { todo: Todo };
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { id: number };
}

export interface RemoveTodoAction {
  type: ActionTypes.REMOVE_TODO;
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


export const updateTodo = (todo: Todo): RemoveTodoAction => {
  return { type: ActionTypes.REMOVE_TODO, payload: todo };
};


export const removeTodo = (id: number): RemoveTodoAction => {
  return { type: ActionTypes.REMOVE_TODO, payload: { id } };
};

export const toggleTodo = (id: number): ToggleTodoAction => {
  return { type: ActionTypes.TOGGLE_TODO, payload: { id } };
};

export type Action = AddTodoAction | ToggleTodoAction | UpdateTodoAction | RemoveTodoAction;
