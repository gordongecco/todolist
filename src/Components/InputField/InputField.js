import * as React from "react";
import { Input } from "semantic-ui-react";

const InputField = props => {
  function onChange(e, data) {
    console.log(data.value);
    props.write(data.value)();
  }

  return <Input onChange={onChange} />;
};

export default InputField;
