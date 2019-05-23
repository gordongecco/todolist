export function addItem(todoItem) {
  return {
    type: "ADDITEM",
    item: todoItem
  };
}
