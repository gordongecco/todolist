import { InputField } from "../../../Components";

import { connect } from "react-redux";
import { addText } from "../../../Redux/InputField1/actions";

export function wrapComponentWithRedux() {
  const mapDispatchToProps = dispatch => ({
    write: text => dispatch(addText(text))
  });

  return connect(
    null,
    mapDispatchToProps
  )(InputField);
}
