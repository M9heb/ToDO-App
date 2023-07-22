import React from "react";
import "./Button.css";
function CancelEditingButton(props) {
  return (
    <button onClick={props.cancelEditingMode} className="btn">
      {props.children}
    </button>
  );
}
export default CancelEditingButton;
