import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const optionCategoryList = categories.slice(1);

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(formData);
    setText("")
    setCategory("Code")
  }

  const formData = {
    text: text,
    category: category
  }

  const categoryOptions = optionCategoryList.map(function (category) {
    return(
    <option key={category}>{category}</option>)
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(event) => setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
