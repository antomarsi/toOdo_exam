import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { addTodo } from "../actions/todos";
import TodoForm from "../components/TodoForm";
import styledComponents from "styled-components";
import { Button } from "antd";
import { FormikActions } from "formik";
import Todo from "../models/Todo";

const ReturnLink = styledComponents(Link)`
position: relative;
bottom: 3.5rem;
float: right;
`;

interface OwnProps extends RouteComponentProps<{}> {
  addTodo: (todo: Todo) => void;
}

class AddPage extends React.Component<OwnProps> {
  submitHandler = (values: Todo, actions: FormikActions<Todo>) => {
    this.props.addTodo(values);
    this.props.history.push("/");
    actions.setSubmitting(false);
  };

  initialValues: Todo = { id: 0, name: "", description: "", completed: false };

  componentDidMount() {}

  public render = () => {
    return (
      <div>
        <ReturnLink to="/">
          <Button
            type="primary"
            shape="circle"
            icon="arrow-left"
            size="large"
          />
        </ReturnLink>
        <TodoForm
          submitHandler={this.submitHandler}
          initialValues={this.initialValues}
        />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addTodo
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddPage)
);
