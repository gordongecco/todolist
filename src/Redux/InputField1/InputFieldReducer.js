const initialState = {
  inputField: "h"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        inputField: action.text
      };
    }
    default:
      return state;
  }
};

export default reducer;
