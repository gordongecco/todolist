import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Form } from "../componentsFromSemantic";

const ModalInput = props => {
  function onMount() {
    props.change("modaliteminput", props.todos[props.index]);
  }

  function onSubmit(e) {
    const data = e.currentTarget.elements["modaliteminput"].value;
    props.changeItem(data, props.index);
    props.setModal();
    props.clear();
  }
  return (
    <Modal basic size="mini" open={props.openModal} onMount={onMount}>
      <Modal.Content>
        <p>New todo :</p>
        <Form onSubmit={onSubmit}>
          <Field name="modaliteminput" component="input" type="text" />
          <button type="submit">Save</button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

const ModalInputReduxForm = reduxForm({
  form: "modalInputForm"
})(ModalInput);

export default ModalInputReduxForm;
