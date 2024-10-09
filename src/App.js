import { useState } from "react";

function Input({value, setValue, onSubmit}) {

  function handleSubmit() {
    onSubmit();
  }
  return (
      <input type="text" 
        className="input" 

        placeholder="Task..."
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
      }}/>
    );
}

export default function List(){


  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    if (value.trim() !== "") {
      setTaskList([...taskList, value]);
      setValue("");
    }
    
  }
  return (
    <div className="container">
      <h1>Todo List</h1>
      <Input value={value} setValue={setValue}
             onSubmit={addTask}/>
      <ol>
        {taskList.map((task, index) => (
            <li key={index}>{task}
            <i className="fa-solid fa-trash"></i>
            <i class="fa-solid fa-pen-to-square"></i>
            </li>          
        ))}
      </ol>
      
    </div>
    );

}