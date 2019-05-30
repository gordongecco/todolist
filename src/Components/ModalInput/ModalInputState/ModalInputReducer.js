import update from "immutability-helper";

const initialState = {
  visible: false,
  index: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET": {
      return {
        visible: update(state.visible, { $apply: x => !x }),
        index: action.index
      };
    }

    default:
      return state;
  }
};

export default reducer;
