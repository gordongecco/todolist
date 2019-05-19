import { createStore, combineReducers } from "redux";

import InputFieldReducer from "./Redux/InputField1";

const rootReducer = combineReducers({
  inputField1: InputFieldReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
