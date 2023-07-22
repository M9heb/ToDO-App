import "./Button.css";
import React from "react";
function Button(props) {
  return (
    <button onClick={props.deleteTask} className="btn">
      {props.children}
    </button>
  );
}
export default Button;
