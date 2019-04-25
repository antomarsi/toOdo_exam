import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout, Typography, Button } from "antd";
import styledComponents from "styled-components";
import { PageTransition as Transition } from 'react-router-page-transition-v2';

import HomePage from "./pages/HomePage";
import store from "./store";
import AddTodoPage from "./pages/AddTodoPage";


const AddButton = styledComponents(Button)`
position: 'absolute',
bottom: 0,
right: 0
`;
const Title = styledComponents(Typography.Title)`
color:#FFFFFF
`;

const PageTransition = styledComponents(Transition)`
color:#FFFFFF
`;

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout style={{ height: "100vh" }}>
          <Link to="add-todo">
            <AddButton type="primary" shape="circle" icon="plus" />
          </Link>
          <Layout.Header>
            <Title>Task list</Title>
          </Layout.Header>
          <PageTransition timeout={500}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/add-todo" component={AddTodoPage} />
            </Switch>
          </PageTransition>
        </Layout>
      </HashRouter>
    </Provider>
  );
};

export default App;
