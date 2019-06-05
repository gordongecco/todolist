import { connect } from "react-redux";
import { clearFields } from "redux-form";

import ListInput from "./ListInput";
import { addItem } from "../../Redux/allActions";

const mapDispatchToProps = dispatch => ({
  addTodoItem: Item => dispatch(addItem(Item)),
  clear: () => dispatch(clearFields("listInputForm", false, false, "iteminput"))
});

export default connect(
  null,
  mapDispatchToProps
)(ListInput);
