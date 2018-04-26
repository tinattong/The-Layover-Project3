import React from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
// outside src
//const newUser = require("../../../../routes/api/user.js");

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,
       user: { name: "", email: "", password: "" } };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.name) {
      alert("Name is Required!");
    } else if (!this.state.email) {
      alert(`Must be Vaild Email`);
    } else if (this.state.password.length < 6) {
      alert(`Password must contain at least 6 characters`);
    } else {
      alert(`Hello ${this.state.name} welcome to Layover!`);
    }

    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel} Sign Up
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
         <ModalBody> 
           <ModalHeader toggle={this.toggle}>Sign Up for Layover</ModalHeader>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="string"
                name="name"
                id="exampleName"
                placeholder="What's Your Name?"
              />
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Your Email."
              />
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Must be 6 Characters."
              />
            </FormGroup>
        
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Sign Up
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
    </ModalFooter> 
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
