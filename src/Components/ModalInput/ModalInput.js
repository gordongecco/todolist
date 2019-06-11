import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Form } from "../componentsFromSemantic";

const ModalInput = props => {
  const {
    change,
    todos,
    index,
    changeItem,
    setModal,
    clear,
    openModal,
    handleSubmit
  } = props;
  function onMount() {
    change("modaliteminput", todos[index]);
  }

  function submit(values) {
    changeItem(values.modaliteminput, index);
    setModal();
    clear();
  }
  return (
    <Modal basic size="mini" open={openModal} onMount={onMount}>
      <Modal.Content>
        <p>New todo :</p>
        <Form onSubmit={handleSubmit(submit)}>
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
