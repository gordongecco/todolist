import { connect } from "react-redux";

import ListItems from "./ListItems";
import { deleteItem } from "../../Redux/TodoList/actions";
import { setModal } from "../../Redux/ModalInput/actions";

const mapStateToProps = state => ({
  items: state.TodoList.todoList,
  openModal: state.ModalInput.visible
});

const mapDispatchToProps = dispatch => ({
  deleteTodoItem: Item => dispatch(deleteItem(Item)),
  setModal: index => dispatch(setModal(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
