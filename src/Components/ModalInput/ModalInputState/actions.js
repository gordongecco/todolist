export const SET_MODAL = "ModalInpitState/setModal";

export function setModal(TodoIndex) {
  return {
    type: SET_MODAL,
    index: TodoIndex
  };
}
