import React from "react";
import {Link} from "react-router-dom";

const Nav = () => (
  <div className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" 
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
            <li> 
            <Link to="/">Sign Up</Link>
            </li>
            <li>
            <Link to="/books">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;