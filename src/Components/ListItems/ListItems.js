import * as React from "react";

const ListItems = props => {
  console.log(props.items);
  function onClick(e) {
    const target = e.currentTarget;
    props.deleteTodoItem(target.id);
    console.log(props.items);
  }
  const items = props.items.map((item, index) => {
    return (
      <div>
        <li key={index}>{item}</li>
        <button id={index} onClick={onClick}>
          Delete
        </button>
      </div>
    );
  });
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default ListItems;
