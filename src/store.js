import { createStore, combineReducers } from "redux";

import { LoginDataReducer, IsValidateReducer } from "./Redux";

const rootReducer = combineReducers({
  LoginData: LoginDataReducer,
  Validate: IsValidateReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
