import styles from './TaskList.module.css';
import pic from '../../Image/Trash.png';
import { useState } from 'react';


function TaskList(props) {

    const [completedTasks , setCompletedTasks] = useState({});
    console.log('tasklist is rendered');
    const checkHandler = (taskId, isChecked) => {
        setCompletedTasks(prevCompletedTasks => ({
          ...prevCompletedTasks,
          [taskId]: isChecked
        }));
      };
    const deleteTaskHandler = (deleteId) => {        
         props.onDeleteTask(deleteId);
    }
    
    return (
        <ul className= {styles.list} >     
        {props.tasks.map((task) => (
            <li key={task.id}>
                <input type="checkbox" 
                    className= {styles.checkbox} 
                    checked={completedTasks[task.id] || false} 
                    onChange={(e) => checkHandler(task.id, e.target.checked)}/>

                <span style= {{textDecoration: completedTasks[task.id] ? "line-through" : null}}> 
                    {task.name}
                </span> 

                <img src={pic} alt="" 
                    className= {styles.trash} 
                    onClick={()=>deleteTaskHandler(task.id)} /> 
            </li>
        ))
            
        }                  
       </ul>
    )
}

export default TaskList;