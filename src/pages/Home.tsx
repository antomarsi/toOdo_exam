import { Layout, List, Typography, Avatar } from "antd";
import * as React from "react";
import TodoList from "../components/TodoList";

class Home extends React.Component {
  public render = () => {
    return (
      <div>
        <Layout>
          <Layout.Header>Task list</Layout.Header>
          <Layout.Content>
            <TodoList />
          </Layout.Content>
        </Layout>
      </div>
    );
  };
}
export default Home;
