import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import {
  addLoginData,
  onValidate,
  setModalLoginForm,
  setToken,
  fillTodoList
} from "../../Redux/allActions";

const mapDispatchToProps = dispatch => ({
  setLoginData: Text => dispatch(addLoginData(Text)),
  onValidate: () => dispatch(onValidate),
  changeModalVisible: () => dispatch(setModalLoginForm),
  setTokenItem: token => dispatch(setToken(token)),
  fillTodos: token => dispatch(fillTodoList(token))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
