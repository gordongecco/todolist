import * as React from "react";
import { Form } from "../componentsFromSemantic";
import { Field, reduxForm } from "redux-form";

import { fillDatabaseArray } from "../../service";

const ListInput = props => {
  const {
    addTodoItem,
    handleSubmit,
    clearFields,
    todoList,
    username,
    token,
    addTodoItemToState
  } = props;
  function submit(values) {
    addTodoItemToState(todoList, values.iteminput).then(res =>
      console.log(todoList)
    );
    // addTodoItem(values.iteminput);
    // let t = [...todoList];
    // t.push(values.iteminput);
    // console.log(t);

    clearFields("listInputForm", false, false, "iteminput");
    // fillDatabaseArray(todoList, token, username);
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
