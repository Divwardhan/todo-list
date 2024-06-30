    import { useRef } from 'react';
    import React from 'react';
    import './TaskManager.css'
    const TaskManager = ({ detlist }) => {
        const btnref = useRef(null)
    if (!Array.isArray(detlist)) {
        console.error("detlist is not an array");
        return null;
    }
    const godFunction=(item)=>{
        item.IsComplete?item.IsComplete=false:item.IsComplete=true;
        console.log(item)
        item.IsComplete?btnref.current.style.textDecoration='line-through':btnref.current.style.textDecoration='none';

    }
   



    return (
        <div className="display">
        <h2>Task Details</h2>
        {
            detlist.map((item) => (
            <div className="tasks" ref={btnref} key={item.task}>
                <button className='statusB' onClick={() => godFunction(item)}>Completed</button>

                <div className="left"  >{item.task}</div>
                <div className="right" >{item.date}</div>

            </div>
            ))
        }
        </div>
    );
    };

    export default TaskManager;
