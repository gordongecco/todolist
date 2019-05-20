import { InputField } from "../../../Components";

import { connect } from "react-redux";
import { addText } from "../../../Redux/InputField1/actions";

const mapDispatchToProps = dispatch => ({
  write: text => dispatch(addText(text))
});

export default connect(
  null,
  mapDispatchToProps
)(InputField);
