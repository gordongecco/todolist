import { connect } from "react-redux";

import ModalInput from "./ModalInput";
import { setModal } from "../../Redux/ModalInput/actions";
import { changeItem } from "../../Redux/TodoList/actions";

const mapStateToProps = state => ({
  openModal: state.ModalInput.visible,
  index: state.ModalInput.index
});

const mapDispatchToProps = dispatch => ({
  setModal: () => dispatch(setModal(null)),
  changeItem: (todoItem, index) => dispatch(changeItem(todoItem, index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalInput);
