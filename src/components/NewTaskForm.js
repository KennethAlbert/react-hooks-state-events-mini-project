import React,{ useState } from "react";


function NewTaskForm({categories,onTaskFormSubmit}) {
const[text,setText]=useState("");
const[category,setTypeCategory]=useState("code")


   function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text,category})
    setText(" ")
    setTypeCategory("code")
   }



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setTypeCategory(e.target.value)}>
        {categories.map((category) => (
          category!=="All"?<option key={category} >{category}</option>:null 
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
