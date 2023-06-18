import React from "react";
import Task from "./Task";


function TaskList({tasks , onDeleteClick}) {

  

const taskList = tasks.map(
  (taskItem) => (<Task key={taskItem.text} text={taskItem.text} category={taskItem.category} onDeleteClick={onDeleteClick}/>)
  
)


  
  return (
    <div className="tasks">

        {taskList}

    </div>
  );
}

export default TaskList;
