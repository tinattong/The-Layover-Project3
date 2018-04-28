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
import axios from "axios";


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      user: {
        name: '',
        email: '',
        password: '',
        errors: {}
      }
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  //cahnge sate to fill 
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  //change state to read submit
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    
    console.log(newUser);
    
    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    return (
     <div class="sign">
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel} Sign Up
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <ModalHeader toggle={this.toggle}>
              Sign Up for Layover
            </ModalHeader>
            <FormGroup >
              <Form noValidate onSubmit={this.onSubmit}>
              <Label for="name">Name</Label>
              <Input type="string" name="name" value={this.state.name} id="exampleName" placeholder="What's Your Name?" onChange={this.onChange} />
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" value={this.state.email} id="exampleEmail" placeholder="Enter Your Email." onChange={this.onChange} />
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" value={this.state.password} id="examplePassword" placeholder="Must be 6 Characters." onChange={this.onChange} />
              </Form>
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
