import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList , setTaskList] = useState(TASKS);
  const [category, setCategory] = useState("All")

  const updatedTaskList = taskList.filter((task) => category === "All" || task.category === category)

  function handleDeleteItem(deletedTask){
    setTaskList(taskList.filter((task) => task.text !== deletedTask))
    // setList(listItem.filter((item) => item.))
  }

  function handleAddTask(newTask){
    setTaskList([...taskList, newTask])
  }

 return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onChangeClick={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList onDeleteClick={handleDeleteItem} tasks={updatedTaskList}  />
    </div>
  );
}

export default App;
