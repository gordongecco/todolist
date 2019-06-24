export const ADD_ITEM = "todolist/addItem";
export const DELETE_ITEM = "todolist/deleteItem";
export const CHANGE_ITEM = "todolist/changeItem";
export const FILL_TODOLIST = "todolist/fillTodoList";

export function addItem(todoItem) {
  return {
    type: ADD_ITEM,
    item: todoItem
  };
}

export function deleteItem(todoIndex) {
  return {
    type: DELETE_ITEM,
    index: todoIndex
  };
}

export function changeItem(todoItem, todoIndex) {
  return {
    type: CHANGE_ITEM,
    item: todoItem,
    index: todoIndex
  };
}

export function fillTodoList(token) {
  return function(dispatch) {
    return fetch("http://localhost:8080/", {
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
}
