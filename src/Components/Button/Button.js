import * as React from "react";
import { Button } from "semantic-ui-react";

const InputField = props => {
  function onClick() {
    if (props.click) props.click();
  }

  return <Button onClick={onClick} />;
};

export default InputField;
