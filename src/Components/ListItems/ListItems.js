import * as React from "react";
import { ModalInput } from "../../Components";
const ListItems = props => {
  function onClick(e) {
    const target = e.currentTarget;
    props.deleteTodoItem(target.id);
  }
  function onChange(e) {
    const target = e.currentTarget;
    props.setModal(target.id);
  }
  const items = props.items.map((item, index) => (
    <div>
      <li key={index}>{item}</li>
      <button id={index} onClick={onClick}>
        Delete
      </button>
      <button id={index} onClick={onChange}>
        Change
      </button>
    </div>
  ));
  return (
    <div>
      <ul>{items}</ul>
      <ModalInput />
    </div>
  );
};

export default ListItems;
