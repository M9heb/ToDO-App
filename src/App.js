import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
function App() {
  // const tasks = [
  //   {
  //     id: 1,
  //     content: "Going to home",
  //   },
  //   {
  //     id: 2,
  //     content: "Going to course",
  //   },
  //   {
  //     id: 3,
  //     content: "Going to playing football",
  //   },
  // ];
  const [tasks, setTasks] = useState([]);
  const onSaveTask = (gottedTask) => {
    if (gottedTask)
      setTasks((prevTasks) => [
        { id: prevTasks.length + 1, content: gottedTask },
        ...prevTasks,
      ]);
  };

  const onDelete = (deletingTaskId) => {
    const newTasks = tasks.filter((task) => task.id !== deletingTaskId);
    setTasks(newTasks);
  };

  const onEdit = (editingTask) => {
    const editedTasks = tasks.map((task) =>
      task.id === editingTask.id
        ? { ...task, content: editingTask.content } // Create a new object with the updated content
        : task
    );

    setTasks(editedTasks);
  };

  return (
    <>
      <MainContainer
        getTask={onSaveTask}
        tasks={tasks}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </>
  );
}

export default App;
