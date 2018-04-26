import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Form,FormGroup,Label,Input,FormTex,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
//import Books from "./pages/Books";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SignUp from "./components/Modals/SignUp.js"
import Login from "./components/Modals/Login.js"
import './app.css'
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
    <Nav /> 
        <SignUp/> 
        <Login/>
    
    <Footer/> 
    
     </div>
   
   
    );
  }
};

export default App;
