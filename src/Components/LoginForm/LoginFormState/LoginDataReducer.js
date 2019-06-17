import { ADD_LOGIN_DATA } from "./actions";

const initialState = {
  username: "",
  password: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOGIN_DATA: {
      return {
        username: action.username,
        password: action.password
      };
    }
    default:
      return state;
  }
};

export default reducer;
