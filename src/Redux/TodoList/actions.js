export const ADD_ITEM = "todolist/addItem";
export const DELETE_ITEM = "todolist/deleteItem";
export const CHANGE_ITEM = "todolist/changeItem";

export function addItem(todoItem) {
  return {
    type: ADD_ITEM,
    item: todoItem
  };
}

export function deleteItem(todoItem) {
  return {
    type: DELETE_ITEM,
    item: todoItem
  };
}

export function changeItem(todoItem, todoIndex) {
  return {
    type: CHANGE_ITEM,
    item: todoItem,
    index: todoIndex
  };
}
