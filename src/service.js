import { connect } from "react-redux";

export function wrapComponentWithRedux(dispatchFunction, Component) {
  return connect(
    null,
    dispatchFunction
  )(Component);
}
