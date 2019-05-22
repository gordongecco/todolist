import { createStore, combineReducers } from "redux";

import LoginDataReducer from "./Redux/LoginData";

const rootReducer = combineReducers({
  LoginData: LoginDataReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
