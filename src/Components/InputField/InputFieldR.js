import { connect } from "react-redux";

import InputField from "./InputField";
import { addText } from "../../Redux/InputField1/actions";

const mapDispatchToProps = dispatch => ({
  write: Text => dispatch(addText(Text))
});

export default connect(
  null,
  mapDispatchToProps
)(InputField);
