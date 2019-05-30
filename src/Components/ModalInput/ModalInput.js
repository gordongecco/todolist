import * as React from "react";
import { Modal, Form } from "../componentsFromSemantic";
const ModalInput = props => {
  function onSubmit(e) {
    const data = e.currentTarget.elements["iteminput"].value;
    props.changeItem(data, props.index);
    props.setModal();
  }
  return (
    <Modal basic size="mini" open={props.openModal}>
      <Modal.Content>
        <p>New todo :</p>
        <Form onSubmit={onSubmit}>
          <input name="iteminput" />
          <button type="submit">Save</button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ModalInput;
