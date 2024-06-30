// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import CreateTask from './Components/CreateTask';
import TaskManager from './Components/TaskManager';

function App() {
  const [details, setDetails] = useState({ IsComplete:false,task: '', date: '' });
  const [detlist, setDetlist] = useState([]);

  const changeDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    // console.log(details);
  };

  const addTask = () => {
    setDetlist([...detlist, details]);
    
  };

  useEffect(() => {
    console.log(detlist);
  }, [detlist]);

  return (
    <>
      <div className="main">
        <div className="creation">
          Todo - List
          <CreateTask details={details} changeDetails={changeDetails} addTask={addTask}  />
        </div>
        <div className="manager">
          <TaskManager detlist={detlist} />
        </div>
      </div>
    </>
  );
}

export default App;

