import React from "react";
import { Link } from "react-router-dom";
//import SignUp from './Modals/SignUp.js';
//import Login from './Modals/Login.js';

const Nav = () => (
  <div className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <h2>Layover</h2>
       
        <button
          type="button"
          className="collapsed navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-right">
           
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
