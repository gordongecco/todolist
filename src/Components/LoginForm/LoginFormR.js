import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { addData } from "../../Redux/LoginData/actions";
import { onValidate } from "../../Redux/IsValidate/actions";

const mapDispatchToProps = dispatch => ({
  setData: Text => dispatch(addData(Text)),
  onValidate: () => dispatch(onValidate)
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
