import * as React from "react";
import { Modal, Form } from "../ComponentsFromSemantic";
const ModalInput = props => {
  function onSubmit(e) {
    const data = e.currentTarget.elements["iteminput"].value;
    props.changeItem(data, props.index);
    props.setModal();
  }
  console.log(props.index);
  return (
    <Modal size="mini" open={props.openModal}>
      <Modal.Content>
        <p>halo modal</p>
        <Form onSubmit={onSubmit}>
          <input name="iteminput" />
          <button type="submit">Save</button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ModalInput;
