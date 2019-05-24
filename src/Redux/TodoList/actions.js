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
