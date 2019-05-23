import { createStore, combineReducers } from "redux";

import { LoginDataReducer, IsValidateReducer, TodoListReducer } from "./Redux";

const rootReducer = combineReducers({
  LoginData: LoginDataReducer,
  Validate: IsValidateReducer,
  TodoList: TodoListReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
