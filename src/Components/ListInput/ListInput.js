import * as React from "react";
import { Form } from "../componentsFromSemantic";
import { Field, reduxForm } from "redux-form";

const ListInput = props => {
  function onSubmit() {
    const data = props.fieldData.iteminput;
    props.addTodoItem(data);
    props.clear();
  }
  return (
    <Form onSubmit={onSubmit}>
      <Field name="iteminput" component="input" type="text" />
      <button type="submit">Save</button>
    </Form>
  );
};

const ListInputReduxForm = reduxForm({
  form: "listInputForm"
})(ListInput);

export default ListInputReduxForm;
