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
import moment from "moment";

interface OwnProps extends RouteComponentProps<{}> {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todos: Todo[];
}
class TodoList extends Component<OwnProps> {
  isAfterDueDate(due_date: Date | undefined): boolean {
    return due_date !== undefined && moment(due_date).isSameOrBefore(moment());
  }

  render() {
    const { todos, removeTodo, toggleTodo } = this.props;
    return (
      <div>
        <Row gutter={16} type="flex" justify="center">
          {todos.length > 0 &&
            todos.map(todo => (
              <Col
                key={todo.id}
                xs={24}
                sm={12}
                md={12}
                lg={8}
                style={{ padding: "1rem" }}
              >
                <Card
                  style={{
                    backgroundColor: this.isAfterDueDate(todo.due_date)
                      ? "#F4846C"
                      : ""
                  }}
                  bordered={true}
                  actions={[
                    <Switch
                      checked={todo.completed}
                      onChange={() => {
                        toggleTodo(todo.id);
                      }}
                    />,
                    <Link title="Edit" to={`/edit-todo/${todo.id}`}>
                      <Icon type="edit" />
                    </Link>,
                    <Popconfirm
                      title="Are you sure delete this task?"
                      onConfirm={() => removeTodo(todo.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Icon
                        title="Delete"
                        type="delete"
                        className="ant-typography-danger"
                        theme="filled"
                      />
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title={
                      <div>
                        <Typography.Text>{todo.name}</Typography.Text>
                        {todo.due_date && (
                          <Typography.Text
                            type="secondary"
                            style={{ float: "right" }}
                          >
                            {moment(todo.due_date).format("YYYY-MM-DD")}
                          </Typography.Text>
                        )}
                      </div>
                    }
                    description={todo.description}
                  />
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
