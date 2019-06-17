const initialState = {
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETTOKEN": {
      return {
        token: action.token
      };
    }
    default:
      return state;
  }
};

export default reducer;
