import { Button } from "antd";
import * as React from "react";
import TodoList from "../components/TodoList";
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const AddLink = styledComponents(Link)`
position: relative;
bottom: 3.5rem;
float: right;
`;
class HomePage extends React.Component {
  public render = () => {
    return (
        <div>
          <AddLink to="add-todo">
            <Button type="primary" shape="circle" icon="plus" size="large" />
          </AddLink>
          <TodoList />
        </div>
    );
  };
}
export default HomePage;
