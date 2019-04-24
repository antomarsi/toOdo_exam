import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-todo" component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
