import React from "react";
import store from "../../store.js";

import {
  InputFieldWidthRedux1,
  InputFieldWidthRedux2
} from "./LoginComponentsWithRedux";
import { Button } from "../../Components";

const LoginScene = () => {
  return (
    <div>
      <h1>Login</h1>
      <InputFieldWidthRedux1 />
      <InputFieldWidthRedux2 />
      <Button
        click={() => {
          console.log(store.getState());
        }}
      />
    </div>
  );
};

export default LoginScene;
