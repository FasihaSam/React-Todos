import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import TaskList from './components/Tasks/TaskList';
import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import {HashRouter,  Route,  Routes } from 'react-router-dom';


function App(props) {

  const [tasksList, setTasksList] = useState([]);

  const [newTaskId, setNewTaskId] = useState(1);

  
  const generateTaskId = ()=> {
    setNewTaskId(newTaskId => newTaskId + 1);
    return newTaskId;
  }
  

  const addTaskHandler = (taskName) => {
    setTasksList((prevTasksList)=> {
      return [...prevTasksList,{id:generateTaskId(newTaskId), name:taskName}];
    });
    console.log('app.js length', tasksList.length);
  }

  const deleteTaskHandler= (taskId) => {
    setTasksList(prevTasksList => prevTasksList.filter(task => task.id !== taskId));
  }
 
  return (
    <HashRouter>
    <Header/>
      <Routes>
        <Route path='/' element= { <Login/>}/>

        <Route
          path="/tasks"
          element={
            <>
              <Tasks onAddTask={addTaskHandler} />
              {tasksList.length === 0 ? (
                <p className="quiet">Seems like a quiet day</p>
              ) : (
                <TaskList tasks={tasksList} onDeleteTask={deleteTaskHandler} />
              )}
            </>
          }
        />
          
          <Route path='register' element= {<Register/>} />
        
      </Routes>
    </HashRouter> 
          
   );
}

export default App;
