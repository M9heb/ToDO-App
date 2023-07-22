import Task from "./Task";
import "./TaskContainer.css";
function TaskContainer(props) {
  return (
    <div className="task-container">
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ))}
    </div>
  );
}
export default TaskContainer;
