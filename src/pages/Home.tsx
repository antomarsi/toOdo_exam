import { ITodo } from "../reducers/todoReducer";
import { Layout, List, Typography, Avatar } from 'antd';
import * as React from "react";
import { IAppState } from "../Store";
import { connect } from "react-redux";

interface IProps {
  todos: ITodo[];
}

class Home extends React.Component<IProps> {
  public render = () => {
    const { todos } = this.props;

    return (<div>
        <Layout>
            <Layout.Header>Task list</Layout.Header>
            <Layout.Content>
                <List
                size="default"
                header={<Typography.Title>Todo</Typography.Title>}
                dataSource={todos}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar/>}
                            title={<Typography.Text>{item.name}</Typography.Text>}
                            description="future description"
                        />
                    </List.Item>
                )}/>
            </Layout.Content>
        </Layout>
    </div>
    );
  };
}

const mapStateToProps = (store: IAppState) => {
  return {
    todos: store.todoState.todos
  };
};

export default connect(mapStateToProps)(Home);
