import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  console.log(editIndex);
  const handleAdd = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      let updatedTask = [...tasks];
      updatedTask[editIndex] = task;
      setTasks(updatedTask);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask("");
  }
  const handleDelete = (index) => {
    let updatedTask = [...tasks];
    updatedTask = updatedTask.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  }
  return (
    <div>
      <h1 style={{color:"blanchedalmond"}}>TODO LIST</h1>
      <input type="text" name="task" id="task"
        placeholder='Enter Task Here'
        value={task}
        onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>{editIndex !== null ? "UPDATE" : "ADD"}</button>

      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <p>{t}</p>
              <button onClick={() => handleEdit(index)}>EDIT</button>
              <button onClick={() => handleDelete(index)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
