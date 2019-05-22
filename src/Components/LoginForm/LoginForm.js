import * as React from "react";
import { Form } from "../ComponentsFromSemantic";

const LoginForm = props => {
  function onSubmit(e) {
    console.log(e.currentTarget.elements["username"].value);
    props.write({
      username: e.currentTarget.elements["username"].value,
      password: e.currentTarget.elements["password"].value
    });
  }
  return (
    <Form name="loginform" onSubmit={onSubmit}>
      <input name="username" placeholder="Username" />
      <input name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default LoginForm;
