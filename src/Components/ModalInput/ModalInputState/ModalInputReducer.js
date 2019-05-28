const initialState = {
  visible: false,
  index: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET": {
      return {
        visible: !state.visible,
        index: action.index
      };
    }

    default:
      return state;
  }
};

export default reducer;
