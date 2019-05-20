import React from "react";

import {
  InputFieldWidthRedux1,
  InputFieldWidthRedux2
} from "./LoginComponentsWithRedux";

const LoginScene = () => {
  return (
    <div>
      <h1>Login</h1>
      <InputFieldWidthRedux1 />
      <InputFieldWidthRedux2 />
    </div>
  );
};

export default LoginScene;
