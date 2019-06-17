import { SET_TOKEN } from "./actions";

const initialState = {
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        token: action.token
      };
    }
    default:
      return state;
  }
};

export default reducer;
