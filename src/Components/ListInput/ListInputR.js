import { connect } from "react-redux";
import { clearFields, getFormValues, reset } from "redux-form";

import ListInput from "./ListInput";
import { addItem } from "../../Redux/allActions";

const mapStateToProps = state => ({
  fieldData: getFormValues("listInputForm")(state)
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: Item => dispatch(addItem(Item)),
  // clearFields: () =>
  //   dispatch(clearFields("listInputForm", false, false, "iteminput"))
  clearFields: () => dispatch(reset("listInputForm"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInput);
