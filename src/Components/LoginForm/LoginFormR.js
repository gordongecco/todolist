import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import {
  addData,
  onValidate,
  setModalLoginForm,
  setToken
} from "../../Redux/allActions";

const mapDispatchToProps = dispatch => ({
  setData: Text => dispatch(addData(Text)),
  onValidate: () => dispatch(onValidate),
  changeModalVisible: () => dispatch(setModalLoginForm),
  setTokenItem: token => dispatch(setToken(token))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
