import React from "react";
import store from "../../store";
import { List } from "../../Components";

function ListScene() {
  if (store.getState().Validate.validate) {
    return <List />;
  } else {
    return <h1>No Validation</h1>;
  }
}

export default ListScene;
