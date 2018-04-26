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

import beachImg from './images/beach-exotic-holiday-248797.jpg';

const App = () => (
  <Router>
    <div className= "img-container">
    
      <img className="backgroundImage" src={beachImg} />      
      
      <Nav />

      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    
    </div>
  </Router>
);

export default App;
