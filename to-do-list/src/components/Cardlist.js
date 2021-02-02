import React from 'react';
import Card from './Card.js'
import Editbar from './Editbar.js';

const Cardlist = ( {tasks, onDelete} ) => {
    const cardComponent = tasks.map((duty, i) =>{
        return <Card key={i} task={tasks[i].task} time={tasks[i].time} date = {tasks[i].date} onDelete={onDelete}/>
    })
    return(
        <div className="cardlist">
            <Editbar />
            {cardComponent}
        </div>
    )
}


















export default Cardlist;
