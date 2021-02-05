import react, {Component} from 'react'
import Task from './Task'

class Tasklist extends Component{
    constructor(props){
        super()
        this.state = []
    }

    del_card = () => {
        console.log('deleted')
    }
 
    render(){
        return(
            <Task del={this.del_card}/>
        )
    }


    
} 

export default Tasklist