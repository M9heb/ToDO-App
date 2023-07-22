import React, { useState } from "react";
import Button from "./Button";
import "./NewTaskForm.css";
function NewTaskForm(props) {
  const [enteredTask, setEnteredTask] = useState("");
  function onInputHandler(event) {
    setEnteredTask(event.target.value);
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    const savedTask = enteredTask;
    props.onSave(savedTask);
    setEnteredTask("");
  }
  return (
    <form onSubmit={onSubmitHandler} className="input-container">
      <input
        type="text"
        value={enteredTask}
        onChange={onInputHandler}
        placeholder="eg. go and buy a gift"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default NewTaskForm;
