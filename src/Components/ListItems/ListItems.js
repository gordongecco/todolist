import * as React from "react";

const ListItems = props => {
  function onClick(e) {
    const target = e.currentTarget;
    props.deleteTodoItem(target.id);
  }
  const items = props.items.map((item, index) => (
    <div>
      <li key={index}>{item}</li>
      <button id={index} onClick={onClick}>
        Delete
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
