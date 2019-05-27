export function addItem(todoItem) {
  return {
    type: "ADDITEM",
    item: todoItem
  };
}

export function deleteItem(todoItem) {
  return {
    type: "DELETEITEM",
    item: todoItem
  };
}

export function changeItem(todoItem, todoIndex) {
  return {
    type: "CHANGEITEM",
    item: todoItem,
    index: todoIndex
  };
}
