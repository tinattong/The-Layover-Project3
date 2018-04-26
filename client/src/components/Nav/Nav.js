import React, { Component } from 'react'
import Login from '../Modals/Login';
import SignUp from '../Modals/SignUp';



class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { loginModal: false, signUpModal: false}
  }
toggleLogin = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
}

toggleSignUp = () => {
    this.setState({
      signUpModal: !this.state.signUpModal
    });
}
  render() { 
    return (
      <div>
         <nav className="navbar navbar-inverse navbar-top">
          <div className="container-fluid">
              <div className="navbar-header">
               <a href="/" className="navbar-brand">
                 The Layover
                </a>
                 <SignUp />
                <Login />
              </div>
           </div>
        </nav> 
      </div>
    );
  };
};
export default Nav;