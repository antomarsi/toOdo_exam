import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { updateTodo } from "../actions/todos";
import TodoForm from "../components/TodoForm";
import styledComponents from "styled-components";
import { Button } from "antd";
import { FormikActions } from "formik";
import Todo from "../models/Todo";
import { getTodoById } from "../selectors/todos";
import { State } from "../reducers";

const ReturnLink = styledComponents(Link)`
position: relative;
bottom: 3.5rem;
float: right;
`;

interface OwnProps extends RouteComponentProps<{id:string}> {
  updateTodo: (todo: Todo) => void;
  getById: (id:number) => Todo | undefined;
}

class EditPage extends React.Component<OwnProps> {
  submitHandler = (values: Todo, actions: FormikActions<Todo>) => {
    this.props.updateTodo(values);
    this.props.history.push("/");
    actions.setSubmitting(false);
  };
  initialValues : Todo | undefined;

  constructor(props:OwnProps) {
    super(props);
    this.initialValues = props.getById(parseInt(props.match.params.id));
    if (!this.initialValues)
      props.history.push("/");
    }

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
          initialValues={this.initialValues as Todo}
        />
      </div>
    );
  };
}

const mapStateToProps = (state: State) => ({
  getById: (id: number) => getTodoById(state, id)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateTodo
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPage)
);
