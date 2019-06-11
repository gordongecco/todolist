import * as React from "react";
import { Form } from "../componentsFromSemantic";
import { withRouter } from "react-router";
import { Field, reduxForm } from "redux-form";

import { validate } from "../../service";

const LoginForm = props => {
  const { setData, onValidate, history, setModal, handleSubmit } = props;
  function submit(values) {
    const data = {
      username: values.username,
      password: values.password
    };
    const fns = () => {
      setData(data);
      onValidate();
      history.push("/list");
    };
    (validate(data) ? fns : setModal)();
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
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
