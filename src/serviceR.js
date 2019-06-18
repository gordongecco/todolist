import { connect } from "react-redux";

import { fillTodos } from "./service";
import { setModalLoginForm } from "./Redux/allActions";

const mapDispatchToProps = dispatch => ({
  set: () => dispatch(setModalLoginForm)
});

export default connect(
  null,
  mapDispatchToProps
)(fillTodos);
