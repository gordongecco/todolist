import * as React from "react";
import { Form } from "../ComponentsFromSemantic";

const LoginForm = props => {
  return (
    <Form>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default LoginForm;
