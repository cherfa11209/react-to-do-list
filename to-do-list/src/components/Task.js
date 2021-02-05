import react from 'react'

const Task = (props) => {
    return(
        <div className="TaskCard">
            <h3>Task</h3>
            <p>time</p>
            <p>day</p>
            <button onClick={props.del}>X</button>
        </div>
    )
    
}

export default Task