import * as React from "react";
import { Form } from "../ComponentsFromSemantic";

const ListInput = props => {
  function onSubmit(e) {
    const data = e.currentTarget.elements["iteminput"].value;
    props.addTodoItem(data);
    e.currentTarget.elements["iteminput"].value = "";
  }
  return (
    <Form onSubmit={onSubmit}>
      <input name="iteminput" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default ListInput;
