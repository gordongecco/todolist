import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Form } from "../componentsFromSemantic";

const ModalInput = props => {
  console.log(props.todos);
  console.log(props.index);
  console.log(props.openModal);
  props.initialize({ modaliteminput: "ffff" });
  // props.change("modaliteminput", "ddddd");
  function onSubmit(e) {
    const data = e.currentTarget.elements["modaliteminput"].value;
    console.log(data);
    props.changeItem(data, props.index);
    props.setModal();
  }
  return (
    <Modal basic size="mini" open={props.openModal}>
      <Modal.Content>
        <p>New todo :</p>
        <Form onSubmit={onSubmit}>
          <Field
            name="modaliteminput"
            component="input"
            // value={props.todos[props.index]}
            type="text"
          />
          <button type="submit">Save</button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

// class ModalInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//     console.log(props.todos);
//     console.log(props.index);
//     props.change("modaliteminput", "ddddd");
//   }
//   componentDidMount() {
//    g(this.props.index);
//     // this.props.initialize({
//     //   modaliteminput: this.props.todos[this.props.index]
//     // });
//   }

//   onSubmit(e) {
//     const data = e.currentTarget.elements["modaliteminput"].value;
//     // console.log(data);
//     this.props.changeItem(data, this.props.index);
//     this.props.setModal();
//   }
//   render() {
//     return (
//       <Modal basic size="mini" open={this.props.openModal}>
//         <Modal.Content>
//           <p>New todo :</p>
//           <Form onSubmit={this.onSubmit}>
//             <Field
//               name="modaliteminput"
//               component="input"
//               defaultlValues={this.props.todos[this.props.index]}
//               type="text"
//             />
//             <button type="submit">Save</button>
//           </Form>
//         </Modal.Content>
//       </Modal>
//     );
//   }
// }

const ModalInputReduxForm = reduxForm({
  form: "modalInputForm",
  enableReinitialize: true
})(ModalInput);

export default ModalInputReduxForm;
