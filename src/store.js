import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import {
  LoginDataReducer,
  IsValidateReducer,
  TodoListReducer,
  ModalInputReducer,
  ModalLoginFormReducer
} from "./Redux";

const rootReducer = combineReducers({
  LoginData: LoginDataReducer,
  Validate: IsValidateReducer,
  TodoList: TodoListReducer,
  ModalInput: ModalInputReducer,
  ModalLoginForm: ModalLoginFormReducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
