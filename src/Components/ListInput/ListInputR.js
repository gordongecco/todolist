import { connect } from "react-redux";

import ListInput from "./ListInput";
import { addItem } from "../../Redux/allActions";

const mapDispatchToProps = dispatch => ({
  addTodoItem: Item => dispatch(addItem(Item))
});

export default connect(
  null,
  mapDispatchToProps
)(ListInput);
