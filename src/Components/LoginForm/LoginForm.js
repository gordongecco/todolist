import * as React from "react";
import { Form } from "../componentsFromSemantic";
import { withRouter } from "react-router";
import { Field, reduxForm } from "redux-form";

import { validate } from "../../service";

const LoginForm = props => {
  function onSubmit() {
    const data = {
      username: props.fieldData.username,
      password: props.fieldData.password
    };
    props.setData(data);
    if (validate(data)) {
      props.onValidate();
      props.history.push("/list");
    } else props.setModal();
  }
  return (
    <Form onSubmit={onSubmit}>
      <Field name="username" component="input" type="text" />
      <Field name="password" component="input" type="text" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const LoginFormWitRouter = withRouter(LoginForm);

const LoginFormWitReduxForm = reduxForm({
  form: "loginForm",
  destroyOnUnmount: false
})(LoginFormWitRouter);

export default LoginFormWitReduxForm;
