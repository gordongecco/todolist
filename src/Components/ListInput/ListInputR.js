import { connect } from "react-redux";
import { clearFields, getFormValues } from "redux-form";

import ListInput from "./ListInput";
import { addItem } from "../../Redux/allActions";

const mapStateToProps = state => ({
  fieldData: getFormValues("listInputForm")(state)
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: Item => dispatch(addItem(Item)),
  clear: () => dispatch(clearFields("listInputForm", false, false, "iteminput"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInput);
