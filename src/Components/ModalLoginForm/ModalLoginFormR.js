import { connect } from "react-redux";

import ModalLoginForm from "./ModalLoginForm";
import { setModalLoginForm } from "../../Redux/allActions";

const mapStateToProps = state => ({
  openModal: state.ModalLoginForm.visible
});

const mapDispatchToProps = dispatch => ({
  setModal: () => dispatch(setModalLoginForm)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalLoginForm);
