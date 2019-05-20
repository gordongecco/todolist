import { InputField } from "../../../Components";
import { addText } from "../../../Redux/InputField1/actions";
import { wrapComponentWithRedux } from "../../../service";

export default wrapComponentWithRedux(
  dispatch => ({
    write: text => dispatch(addText(text))
  }),
  InputField
);
