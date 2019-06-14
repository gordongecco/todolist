import { connect } from "react-redux";
import { getFormValues, isDirty } from "redux-form";

import LoginForm from "./LoginForm";
import { addData, onValidate, setModalLoginForm } from "../../Redux/allActions";

const mapStateToProps = state => ({
  fieldData: getFormValues("loginForm")(state),
  usernameDirty: isDirty("loginForm")(state, ["username"])
});

const mapDispatchToProps = dispatch => ({
  setData: Text => dispatch(addData(Text)),
  onValidate: () => dispatch(onValidate),
  changeModalVisible: () => dispatch(setModalLoginForm)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
