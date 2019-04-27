import { State } from "../reducers/";
import { createSelector } from "reselect";
import Todo from "../models/Todo";

const getById = (state: State, id: number) => {
  return state.todos.todos.find((item: Todo) => {
    return item.id === id;
  });
};
const getTodosState = (state: State) => state.todos;

export const getTodos = createSelector(
  [getTodosState],
  s => s.todos
);

export const getTodoById = createSelector(
  [getById],
  s => s
);
