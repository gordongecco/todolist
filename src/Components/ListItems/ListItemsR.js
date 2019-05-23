import { connect } from "react-redux";

import ListItems from "./ListItems";

const mapStateToProps = state => ({
  items: state.TodoList.todoList
});

export default connect(mapStateToProps)(ListItems);
