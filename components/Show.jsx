import React, { useContext } from 'react'
import { todocontext } from '../src/Context/Contexts';

const Show = (props) => {

    const [tasks,settasks] = useContext(todocontext)

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
    <ul style={{listStyle: "none"}}>{tasksrender}</ul>
  )
}

export default Show
