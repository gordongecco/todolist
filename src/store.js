import { createStore, combineReducers } from "redux";

import InputFieldReducer1 from "./Redux/InputField1";
import InputFieldReducer2 from "./Redux/InputField2";

const rootReducer = combineReducers({
  inputField1: InputFieldReducer1,
  inputField2: InputFieldReducer2
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
