import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { addData, onValidate, setModalLoginForm } from "../../Redux/allActions";

const mapDispatchToProps = dispatch => ({
  setData: Text => dispatch(addData(Text)),
  onValidate: () => dispatch(onValidate),
  setModal: () => dispatch(setModalLoginForm)
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
