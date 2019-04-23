import { ITodo } from "../reducers/todoReducer";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTodos } from '../actions/TodoActions';

interface IProps {
  todos: ITodo[];
}

class AddTodo extends React.Component<IProps> {
  public render = () => {
    const { todos } = this.props;
    return <div>
        <h1>Lista de todos</h1>
        {todos && todos.map(todo => <span>{todo.name}</span>)}
        </div>;
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodo: dispatch(addTodos(todo))
  });

export default connect(null, map)(AddTodo);
