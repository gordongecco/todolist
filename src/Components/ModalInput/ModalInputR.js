import { connect } from "react-redux";

import ModalInput from "./ModalInput";
import { setModal, changeItem } from "../../Redux/allActions";

const mapStateToProps = state => ({
  openModal: state.ModalInput.visible,
  index: state.ModalInput.index,
  todos: state.TodoList.todoList,
  username: state.LoginData.username,
  token: state.Token.token
});

const mapDispatchToProps = dispatch => ({
  changeModalVisible: () => dispatch(setModal(null)),
  changeItem: (todoItem, index) => dispatch(changeItem(todoItem, index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalInput);
