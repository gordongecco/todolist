import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

import {
  LoginDataReducer,
  IsValidateReducer,
  TodoListReducer,
  ModalInputReducer,
  ModalLoginFormReducer,
  TokenReducer
} from "./Redux";

const rootReducer = combineReducers({
  LoginData: LoginDataReducer,
  Validate: IsValidateReducer,
  TodoList: TodoListReducer,
  ModalInput: ModalInputReducer,
  ModalLoginForm: ModalLoginFormReducer,
  Token: TokenReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
