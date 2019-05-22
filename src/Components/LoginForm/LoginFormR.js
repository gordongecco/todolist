import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { addData } from "../../Redux/LoginData/actions";

const mapDispatchToProps = dispatch => ({
  write: Text => dispatch(addData(Text))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
