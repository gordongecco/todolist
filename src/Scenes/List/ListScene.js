import React from "react";
import store from "../../store";

function ListScene() {
  console.log(store.getState().Validate);
  if (store.getState().Validate) return <h1>List</h1>;
  else return <h1>No Validation</h1>;
}

export default ListScene;
