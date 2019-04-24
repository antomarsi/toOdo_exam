import Todo from "../models/Todo";
import { ActionTypes } from "../actions/todos";
import { AnyAction } from "redux";

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [ {
      id: 0,
      name: "TESTE",
      completed: false
  }]
};

export function reducer(state: State = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return { ...state, todos: [state.todos, action.payload.todo] };
    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}
