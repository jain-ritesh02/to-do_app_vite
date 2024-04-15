import React, { useState } from 'react'
import './App.css'
import './index.css'

const App = () => {

  const [tasks, settasks] = useState([])
  const [title, settitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTasks = [...tasks];
    copyTasks.push({ title, completed: false });
    settasks(copyTasks);
    settitle("");
  }

  const deleteHandler = (i) => {
    const copyTasks = [...tasks];
    let isValid = false;
    if(!copyTasks[i].completed){
      isValid = confirm( "Are you sure you want to delete this task?")
    }

    if(isValid || copyTasks[i].completed) {
      copyTasks.splice(i, 1);
      settasks(copyTasks);
    }

  }

  const CompleteTaskToggle = (i) => {

    const copyTasks = [...tasks];
    copyTasks[i].completed = !tasks[i].completed;
    settasks(copyTasks);
};

let tasksrender = (
  <h2 className="text-center text-orange-800 mr-[10%] text-2xl">
      No Pending Tasks ... 
  </h2>
);

if (tasks.length > 0) {
  tasksrender = tasks.map((task,index) => {
    return (
      <li key={index}>
        <div className="task">
            <div className="one">
            <div onClick={() => CompleteTaskToggle(index)} className={`min-circle ${
                                task.completed ? "bg-green-500" : "border"
                            } cursor-pointer `} ></div>
            <h2 className={`${
                                task.completed && "line-through"
                            } `}>{task.title}</h2>
            </div>
            <div className="icon">
            <i className="ri-edit-box-line"></i>
            <i onClick={()=> deleteHandler(index)} className="ri-delete-bin-6-line"></i>
            </div>
          </div>
      </li>
    )
  })
}

  return (
    <div>
     <div id="main">
      <div className="container">
        <div className="to-do">
          <div className="text">
          <h1>LET'S TODO</h1>
          <p>keep doing good things.</p>
          </div>
          <div className="circle">
            <h1>{tasks.filter((t) => t.completed === true).length}/{tasks.length}</h1>
          </div>
        </div>
        {/*  */}
         <form onSubmit={submitHandler}>
         <input type="text" placeholder='write your next task ...' value={title} onChange={(e) => settitle(e.target.value)} />
          <button type="submit">
          <i id='button' className="ri-add-fill"></i>
          </button>
         </form>
         {/*  */}
        <div className="tasks">
          
        </div>
     <ul style={{listStyle: "none"}}>{tasksrender}</ul>
      </div>
     </div>
    </div>
  )
}

export default App
