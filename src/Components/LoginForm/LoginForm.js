import * as React from "react";
import { Form } from "../componentsFromSemantic";
import { withRouter } from "react-router";
import { Field, reduxForm } from "redux-form";

import { validate } from "../../service";

const LoginForm = props => {
  const {
    setLoginData,
    onValidate,
    history,
    changeModalVisible,
    handleSubmit,
    setTokenItem
  } = props;

  async function submit(values) {
    const data = {
      username: values.username,
      password: values.password
    };
    const token = await validate(data);

    const fns = () => {
      setTokenItem(token);
      setLoginData(data);
      onValidate();
      history.push("/list");
    };
    (token ? fns : changeModalVisible)();
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
