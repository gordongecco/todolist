import update from "immutability-helper";

const initialState = {
  visible: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETMODALLOGINFORM": {
      return {
        visible: update(state.visible, { $apply: x => !x })
      };
    }

    default:
      return state;
  }
};

export default reducer;
