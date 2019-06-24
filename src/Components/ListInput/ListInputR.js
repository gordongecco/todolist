import { connect } from "react-redux";

import ListInput from "./ListInput";
import { addItem, addTodoItemToState } from "../../Redux/allActions";

const mapStateToProps = state => ({
  todoList: state.TodoList.todoList,
  username: state.LoginData.username,
  token: state.Token.token
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: Item => dispatch(addItem(Item)),
  addTodoItemToState: (array, item) => dispatch(addTodoItemToState(array, item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInput);
