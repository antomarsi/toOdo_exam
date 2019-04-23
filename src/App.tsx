import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Home from './pages/Home';

const Routes: React.SFC<{}> = props => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/add-todo" component={Home}/>
      </Switch>
    </HashRouter>
  );
};

const App: React.SFC<{}> = () => {
  return <Routes />;
};

export default App;
