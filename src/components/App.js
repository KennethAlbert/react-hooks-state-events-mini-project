import React ,{ useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDelete(name) {
    setTasks(tasks.filter((task) => task.text !== name))
  }
 function handleAdd(items) {
  setTasks([...tasks, items])
 }

console.log(tasks)



  const tasksDisplayed = tasks.filter((task) => category === "All" || task.category === category)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={category} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAdd}/>
      <TaskList tasks={tasksDisplayed} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
