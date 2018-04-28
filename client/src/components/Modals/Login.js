import React from "react";
import {
  Button,
  FormGroup,
  Label,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";




class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      user: {
        email: "",
        password: ""
      }
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  


  render () {
    return (
      <div>
       <Button color="primary" onClick={this.toggle}>
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
              <Form noValidate onSubmit={this.onSubmit}>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Enter Your Email."
              />
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Enter Your Password."
              />
              </Form>
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
    )
  }
}


export default Login;
