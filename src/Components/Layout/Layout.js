import * as React from "react";
import { Route } from "react-router-dom";

const Layout = props => {
  const { login: Login, list: List } = props;
  return (
    <React.Fragment>
      <Route path="/" component={() => <h1>Home</h1>} exact />
      <Route path="/login" component={Login} />
      <Route path="/list" component={List} />
    </React.Fragment>
  );
};

export default Layout;
