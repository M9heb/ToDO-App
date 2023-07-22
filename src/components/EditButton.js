import React from "react";
import "./Button.css";
function EditButton(props) {
  return (
    <button onClick={props.edit} className="btn">
      {props.children}
    </button>
  );
}
export default EditButton;
