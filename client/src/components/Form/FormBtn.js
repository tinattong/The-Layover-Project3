import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 50 }} className="btn btn-success">
    {props.children}
  </button>
);
