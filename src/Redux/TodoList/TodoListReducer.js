const initialState = {
  todoList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM": {
      return Object.assign({}, state, {
        todoList: [...state.todoList, action.item]
      });
    }
    case "DELETEITEM": {
      const array = [...state.todoList];
      array.splice(action.item, 1);
      return { todoList: array };
    }
    default:
      return state;
  }
};

export default reducer;