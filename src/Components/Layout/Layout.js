import * as React from "react";
import { Route } from "react-router-dom";
const Layout = props => {
  const { login: Login, list: List, home: Home } = props;
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />

      <Route path="/list" component={List} />
    </div>
  );
};

export default Layout;
