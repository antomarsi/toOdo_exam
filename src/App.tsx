import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";
import styledComponents from "styled-components";

import HomePage from "./pages/HomePage";
import store from "./store";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

const TopBarTitle = styledComponents(Title)`
  color: #FFFFFF !important;
`;

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout style={{ height: "100vh" }}>
          <Layout.Header>
            <TopBarTitle>Task list</TopBarTitle>
          </Layout.Header>
          <Layout.Content style={{ padding: "16px 50px" }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/add-todo" component={AddPage} />
                <Route path="/edit-todo/:id" component={EditPage} />
              </Switch>
            </div>
          </Layout.Content>
          <Layout.Footer>
            
          </Layout.Footer>
        </Layout>
      </HashRouter>
    </Provider>
  );
};

export default App;
