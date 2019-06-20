import { ADD_ITEM, DELETE_ITEM, CHANGE_ITEM } from "./actions";

import update from "immutability-helper";

const initialState = {
  todoList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return { todoList: update(state.todoList, { $push: [action.item] }) };
    }
    case DELETE_ITEM: {
      return {
        todoList: update(state.todoList, { $splice: [[action.index, 1]] })
      };
    }
    case CHANGE_ITEM: {
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
