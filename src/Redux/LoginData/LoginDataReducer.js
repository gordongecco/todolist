const initialState = {
  username: "",
  password: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
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
