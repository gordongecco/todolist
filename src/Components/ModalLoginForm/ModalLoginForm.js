import * as React from "react";
import { Modal } from "../componentsFromSemantic";
const ModaLoginForm = props => {
  function onClick() {
    props.setModal();
  }
  return (
    <Modal basic size="mini" open={props.openModal}>
      <Modal.Content>
        <p>Username or Password is incorrect!</p>
        <button onClick={onClick}>Close</button>
      </Modal.Content>
    </Modal>
  );
};

export default ModaLoginForm;
