import { useState } from 'react';
import classes from './Tasks.module.css';
import Logout from '../Logout/Logout';
import Button from '../../UI/Button';
// import { useNavigate } from 'react-router-dom';

function Tasks(props) {

    const [enteredTask, setEnteredTask] = useState('');
    // const navigate = useNavigate();

    const addTaskHandler = (event) => {
        event.preventDefault();           
        if(enteredTask.trim().length===0) {
            return;
        }
        props.onAddTask(enteredTask);
        setEnteredTask('');    
        console.log('add task clicked'); 
        // navigate('todos');
    }

    const taskChangeHandler= (event) => {
        setEnteredTask(event.target.value);        
    }

    return (
        <>
        <Logout/>
        <form >
            <main className={classes.main} >
                <h4>All Tasks</h4>
                <input type="text" 
                id="taskInput" 
                className= {classes['task-input']}
                onChange={taskChangeHandler}
                value={enteredTask} />
                <Button className= "button" onClick = {addTaskHandler} >Add</Button>
                
            </main>
        </form>
        </>
    )
}
export default Tasks;