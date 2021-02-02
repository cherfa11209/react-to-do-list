import React from 'react'


const Card = ({task, time, date, onDelete}) => {
    return(
        <div className="card">
             <p>{task} {time} {date}</p>
             <button onClick={() => onDelete(Card)} className="delete">X</button>
        </div>
    )
}
 






export default Card;