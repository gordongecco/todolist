import * as React from "react";

const ListItems = props => {
  function onDelete(e) {
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
      <button id={index} onClick={onDelete}>
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
    </div>
  );
};

export default ListItems;
