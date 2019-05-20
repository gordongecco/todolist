import { connect } from "react-redux";

import InputField from "./InputField";
import { addText } from "../../Redux/InputField1/actions";

const mapDispatchToProps = dispatch => ({
  write: text => dispatch(addText(text))
});

export default connect(
  null,
  mapDispatchToProps
)(InputField);
