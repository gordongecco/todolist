import * as React from "react";
import { Modal } from "../ComponentsFromSemantic";
const ModaLoginForm = props => {
  function onClick() {
    props.setModal();
  }
  return (
    <Modal basic size="mini" open={props.openModal}>
      <Modal.Content>
        <p>False Username or Password !</p>
        <button onClick={onClick}>Close</button>
      </Modal.Content>
    </Modal>
  );
};

export default ModaLoginForm;
