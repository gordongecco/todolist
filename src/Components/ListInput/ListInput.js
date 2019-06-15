import * as React from "react";
import { Form } from "../componentsFromSemantic";
import { Field, reduxForm } from "redux-form";

const ListInput = props => {
  const { addTodoItem, handleSubmit, clearFields } = props;
  function submit(values) {
    addTodoItem(values.iteminput);
    clearFields("listInputForm", false, false, "iteminput");
  }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Field name="iteminput" component="input" type="text" />
      <button type="submit">Save</button>
    </Form>
  );
};

const ListInputReduxForm = reduxForm({
  form: "listInputForm"
})(ListInput);

export default ListInputReduxForm;
