import * as React from "react";
import { Form } from "../componentsFromSemantic";
import { withRouter } from "react-router";

import { validate } from "../../service";

const LoginForm = props => {
  function onSubmit(e) {
    const data = {
      username: e.currentTarget.elements["username"].value,
      password: e.currentTarget.elements["password"].value
    };
    props.setData(data);
    if (validate(data)) {
      props.onValidate();
      props.history.push("/list");
    } else props.setModal();
  }
  return (
    <Form onSubmit={onSubmit}>
      <input name="username" placeholder="Username" />
      <input name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const LoginFormWitRouter = withRouter(LoginForm);

export default LoginFormWitRouter;
