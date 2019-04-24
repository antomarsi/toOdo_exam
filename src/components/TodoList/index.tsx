import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { getTodos } from "../../selectors/todos";
import { State } from "../../reducers";
import Todo from "../../models/Todo";
import { toggleTodo } from "../../actions/todos";

interface StateProps {
  todos: Todo[];
}

interface DispatchProps {
  onTodoClicked: (id: number) => void;
}

type Props = StateProps & DispatchProps;

class TodoList extends Component<Props> {
  render() {
    const { todos, onTodoClicked } = this.props;
    return <ul>{todos.map(todo => todo.name)}</ul>;
  }
}
const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTodoClicked: toggleTodo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
