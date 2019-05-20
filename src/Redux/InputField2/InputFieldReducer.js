const initialState = {
  inputField: "ho"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDPASSWORD": {
      return {
        inputField: action.text
      };
    }
    default:
      return state;
  }
};

export default reducer;
