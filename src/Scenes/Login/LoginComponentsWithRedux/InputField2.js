import { InputField } from "../../../Components";
import { addPassword } from "../../../Redux/InputField2/actions";
import { wrapComponentWithRedux } from "../../../service";

export default wrapComponentWithRedux(
  dispatch => ({
    write: text => dispatch(addPassword(text))
  }),
  InputField
);
