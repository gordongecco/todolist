import * as React from "react";
import store from "../../store";

import { fillDatabaseArray } from "../../service";

const ListItems = props => {
  const { deleteTodoItem, setModal, items, token, username } = props;
  function onDelete(e) {
    const target = e.currentTarget;
    deleteTodoItem(target.id);
    const todoList = store.getState().TodoList.todoList;
    fillDatabaseArray(todoList, token, username);
  }
  function onChange(e) {
    const target = e.currentTarget;
    setModal(target.id);
  }
  const todoItems = items.map((item, index) => (
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
      <ul>{todoItems}</ul>
    </div>
  );
};

export default ListItems;
