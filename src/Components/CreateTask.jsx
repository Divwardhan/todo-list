import React from 'react'
import './CreateTask.css'
const CreateTask = ({ details, changeDetails, addTask}) => {


  return (
    <div className="create">
      <input type="text" name='task' className="task" value={details.task} onChange={changeDetails} />
      <input type="date" name='date' className="date" value={details.date} onChange={changeDetails}/>
      
      <button className="add" onClick={addTask}>+</button>
      
    </div>
    
  );
};

export default CreateTask
