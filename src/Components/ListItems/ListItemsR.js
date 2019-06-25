import { connect } from "react-redux";

import ListItems from "./ListItems";
import { deleteItem, setModal } from "../../Redux/allActions";

const mapStateToProps = state => ({
  items: state.TodoList.todoList,
  openModal: state.ModalInput.visible,
  username: state.LoginData.username,
  token: state.Token.token
});

const mapDispatchToProps = dispatch => ({
  deleteTodoItem: index => dispatch(deleteItem(index)),
  setModal: index => dispatch(setModal(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
