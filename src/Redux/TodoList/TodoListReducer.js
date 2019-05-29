import update from "immutability-helper";

const initialState = {
  todoList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM": {
      return { todoList: update(state.todoList, { $push: [action.item] }) };
    }
    case "DELETEITEM": {
      return {
        todoList: update(state.todoList, { $splice: [[action.item, 1]] })
      };
    }
    case "CHANGEITEM": {
      return {
        todoList: update(state.todoList, {
          $splice: [[action.index, 1, action.item]]
        })
      };
    }
    default:
      return state;
  }
};

export default reducer;
