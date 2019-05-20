import { InputField } from "../../../Components";

import { connect } from "react-redux";
import { addText } from "../../../Redux/InputField1/actions";

const mapDispatchToProps2 = dispatch => ({
  write: () => dispatch(addText("jjjjjj"))
});

export default connect(
  null,
  mapDispatchToProps2
)(InputField);
