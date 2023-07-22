import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskContainer from "./TaskContainer";
import "./MainContainer.css";
function MainContainer(props) {
  // function saveInsertedTask(task) {
  //   props.getTask(task);
  // }

  return (
    <div className="container">
      <NewTaskForm onSave={props.getTask} />
      <hr />
      <TaskContainer
        tasks={props.tasks}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
      ></TaskContainer>
    </div>
  );
}
export default MainContainer;
