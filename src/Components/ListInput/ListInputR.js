import { connect } from "react-redux";

import ListInput from "./ListInput";
import { addItem } from "../../Redux/allActions";

const mapStateToProps = state => ({
  username: state.LoginData.username,
  token: state.Token.token
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: Item => dispatch(addItem(Item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInput);
