import { SET_MODAL_LOGIN_FORM } from "./actions";

import update from "immutability-helper";

const initialState = {
  visible: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_LOGIN_FORM: {
      return {
        visible: update(state.visible, { $apply: x => !x })
      };
    }

    default:
      return state;
  }
};

export default reducer;
