import { connect } from "react-redux";
import { getFormValues } from "redux-form";

import LoginForm from "./LoginForm";
import { addData, onValidate, setModalLoginForm } from "../../Redux/allActions";

const mapStateToProps = state => ({
  fieldData: getFormValues("loginForm")(state)
});

const mapDispatchToProps = dispatch => ({
  setData: Text => dispatch(addData(Text)),
  onValidate: () => dispatch(onValidate),
  setModal: () => dispatch(setModalLoginForm)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
