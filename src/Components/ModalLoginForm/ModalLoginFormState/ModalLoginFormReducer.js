const initialState = {
  visible: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETMODALLOGINFORM": {
      return {
        visible: !state.visible
      };
    }

    default:
      return state;
  }
};

export default reducer;
