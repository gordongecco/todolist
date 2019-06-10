import { connect } from "react-redux";
import { clearFields, reset } from "redux-form";

import ModalInput from "./ModalInput";
import { setModal, changeItem } from "../../Redux/allActions";

const mapStateToProps = state => ({
  openModal: state.ModalInput.visible,
  index: state.ModalInput.index,
  todos: state.TodoList.todoList
  // initialValues: { modaliteminput: "gggg" }
  // initialValues: {
  //   modaliteminput: state.TodoList.todoList[0]
  // }
});

const mapDispatchToProps = dispatch => ({
  setModal: () => dispatch(setModal(null)),
  changeItem: (todoItem, index) => dispatch(changeItem(todoItem, index)),
  clear: () =>
    dispatch(clearFields("modalInputForm", false, false, "modaliteminput")),
  reset: () => dispatch(reset("modalInputForm"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalInput);
