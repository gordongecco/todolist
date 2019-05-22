const initialState = {
  validate: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON": {
      return {
        validate: true
      };
    }
    case "OFF": {
      return {
        validate: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
