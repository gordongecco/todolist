import { connect } from "react-redux";

import ListItems from "./ListItems";
import { deleteItem } from "../../Redux/TodoList/actions";

const mapStateToProps = state => ({
  items: state.TodoList.todoList
});

const mapDispatchToProps = dispatch => ({
  deleteTodoItem: Item => dispatch(deleteItem(Item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
