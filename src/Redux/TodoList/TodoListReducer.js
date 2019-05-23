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
    default:
      return state;
  }
};

export default reducer;
