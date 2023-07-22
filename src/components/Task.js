import React, { useState } from "react";
import Button from "./Button";
import EditButton from "./EditButton";
import CancelEditingButton from "./CancelEditingButton";
import "./Task.css";
function Task(props) {
  const [editingMode, setEditingMode] = useState(false);
  const [currentTaskContent, setCurrentTaskContent] = useState(props.content);

  const onEditingMode = () => {
    setEditingMode(true);
  };
  const onInputHandler = (event) => {
    // setCurrentTask(...props, event.target.value);
    setCurrentTaskContent(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const currentTask = { ...props, content: currentTaskContent };
    props.onEdit(currentTask);
    setEditingMode(false);
  };
  function deletingTask() {
    props.onDelete(props.id);
  }
  const cancelEditingMode = () => {
    setEditingMode(false);
    setCurrentTaskContent(props.content);
  };
  if (editingMode) {
    return (
      <form onSubmit={onSubmitHandler} className="input-container">
        <input
          type="text"
          value={currentTaskContent}
          onChange={onInputHandler}
          placeholder="eg. go and buy a gift"
        />
        <Button type="submit" editingMode={setEditingMode}>
          Submit
        </Button>
        <CancelEditingButton
          type="cancel"
          cancelEditingMode={cancelEditingMode}
        >
          Cancel
        </CancelEditingButton>
      </form>
    );
  } else {
    // <form onSubmit={onSubmitHandler} className="input-container">
    //     <input
    //       type="text"
    //       value={enteredTask}
    //       onChange={onInputHandler}
    //       placeholder="eg. go and buy a gift"
    //     />
    //     <Button type="submit">Add</Button>
    //   </form>
    return (
      <div className="task">
        <h2 className="task--header">{props.content}</h2>
        <div className="btn--container">
          <Button deleteTask={deletingTask} className="btn">
            Delete
          </Button>
          <EditButton className="btn" edit={onEditingMode}>
            Edit
          </EditButton>
        </div>
      </div>
    );
  }
}

export default Task;
