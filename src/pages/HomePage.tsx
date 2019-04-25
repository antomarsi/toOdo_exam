import { Layout, List, Typography, Avatar, Button } from "antd";
import * as React from "react";
import TodoList from "../components/TodoList";



class HomePage extends React.Component {
  public render = () => {
    return (
        <Layout.Content>
          <TodoList />
        </Layout.Content>
    );
  };
}
export default HomePage;
