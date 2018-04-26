import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormTex,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

// outside src
//const newUser = require("../../../../routes/api/user.js");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: {
        email: "",
        password: ""
      }
    };

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
    if  (!this.state.email) {
      alert(`Must be Vaild Email`);
    } else if (this.state.password.length < 6) {
      alert(`Password must contain at least 6 characters`);
    } else {
      alert(`Hello ${this.state.name} welcome to Layover!`);
    }

    this.setState({

      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel} Login
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Login to Layover</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Your Email."
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter Your Password."
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Login
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
