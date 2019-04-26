import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getTodos } from "../selectors/todos";
import { State } from "../reducers";
import Todo from "../models/Todo";
import { toggleTodo, removeTodo } from "../actions/todos";
import { Row, Col, Card, Icon, Switch, Popconfirm, Typography } from "antd";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";

interface OwnProps extends RouteComponentProps<{}> {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todos: Todo[];
}

class TodoList extends Component<OwnProps> {
  render() {
    const { todos, removeTodo, toggleTodo } = this.props;
    return (
      <div>
        <Row gutter={16} type="flex" justify="center">
          {todos.length > 0 &&
            todos.map(todo => (
              <Col key={todo.id} xs={24} sm={12} md={8} lg={4} style={{padding:"1rem"}}>
                <Card
                  bordered={true}
                  actions={[
                    <Switch
                      checked={todo.completed}
                      onChange={() => {
                        toggleTodo(todo.id);
                      }}
                    />,
                    <Link to={`/edit-todo/${todo.id}`}>
                      <Icon type="edit" />
                    </Link>,
                    <Popconfirm
                      title="Are you sure delete this task?"
                      onConfirm={() => removeTodo(todo.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Icon
                        type="delete"
                        className="ant-typography-danger"
                        theme="filled"
                      />
                    </Popconfirm>
                  ]}
                >
                  <Meta title={todo.name} description={todo.description} />
                </Card>
              </Col>
            ))}
          {!todos.length && (
            <Col span={24}>
              <Typography.Title level={4} style={{ textAlign: "center" }}>
                You don't have any task. Click <Link to="/add-todo">here</Link>{" "}
                to add a task.
              </Typography.Title>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleTodo,
      removeTodo
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
