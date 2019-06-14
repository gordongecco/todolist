import { connect } from "react-redux";
import { clearFields } from "redux-form";

import ModalInput from "./ModalInput";
import { setModal, changeItem } from "../../Redux/allActions";

const mapStateToProps = state => ({
  openModal: state.ModalInput.visible,
  index: state.ModalInput.index,
  todos: state.TodoList.todoList
});

const mapDispatchToProps = dispatch => ({
  changeModalVisible: () => dispatch(setModal(null)),
  changeItem: (todoItem, index) => dispatch(changeItem(todoItem, index)),
  clearFields: () =>
    dispatch(clearFields("modalInputForm", false, false, "modaliteminput"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalInput);
