import react from 'react'

const Task = (props) => {
    return(
        <div className="TaskCard">
            <input type="checkbox" className="check"></input>
            <h3 id={props.id} key={props.key}>{props.task}</h3>
            <button 
            key={props.key} 
            className="delete-btn" 
            onClick={props.del}
            
            className={props.class}
            >
               <img src="https://freeiconshop.com/wp-content/uploads/edd/trash-var-outline.png" className={props.class} onClick={props.del} alt="delete"/>
            </button>
        </div>
    )
    
}

export default Task