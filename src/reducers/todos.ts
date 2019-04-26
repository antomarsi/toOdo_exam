import Todo from "../models/Todo";
import { ActionTypes } from "../actions/todos";
import { AnyAction } from "redux";

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: []
};

export function reducer(state: State = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      let nextId = !state.todos.length
        ? 1
        : Math.max.apply(Math, state.todos.map((todo: Todo) => todo.id)) + 1;
      return {
        ...state,
        todos: [...state.todos, { ...action.payload.todo, id: nextId }]
      };
    }
    case ActionTypes.TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            let data = { ...todo, completed: !todo.completed };
            return data;
          } else {
            return todo;
          }
        })
      };
    }
    case ActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.todo.id ? action.payload.todo : todo
        )
      };
    case ActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => action.payload.id !== todo.id)]
      };
    default:
      return state;
  }
}
