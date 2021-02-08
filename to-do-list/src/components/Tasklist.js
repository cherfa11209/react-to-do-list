import react, {Component} from 'react'
import Task from './Task'

class Tasklist extends Component{
    constructor(){
        super()
        this.state = {
            tasks: [
            'jog',
            'make breakfast',
            'code for 3h+',
            'work-out', 
            'play guitar', 
            'work on youtube',
            'make dinner', 
            'work', 
            'shower',
            'sleep', 
            ],
            currentTask:{
                text:'',
                key:''
            }
        }
    }

    del_card = (e) => {
        console.log(e.target.className)
        const updatedTasks = []
        this.state.tasks.map((task, i) =>{
            if(i != e.target.className){
                updatedTasks.push(task)
            }
            else{
                console.log('deleted!')
            }
        })
        this.setState({
            tasks: updatedTasks,
            currentTask:{
                text:'',
                key:''
            }
        })
    }

    handleInput = (e) => {
        this.setState({
            currentTask:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }
 
    addTask = () =>{
        const  newTask = (this.state.currentTask.text)
        if(newTask.text != ""){
            const newTasks = [...this.state.tasks, newTask]
            this.setState({
                tasks:newTasks,
                currentTask:{
                    text:'',
                    key:''
                }
            })
        }
    }

    render(){
        return(

            <div>
                <div className="addbar">
                    <input type="text"
                    placeholder="add task" 
                    value={this.state.currentTask.text} 
                    onChange={this.handleInput}
                    className="adder"
                    ></input>
                    <button onClick={this.addTask} className="add">+</button>
                </div>
                

                <div className = "tasklist"> 
                    {this.state.tasks.map((task, i)=> (
                        <Task class={i} id={i} task={task} del={this.del_card} />
                    ))}
                </div>
            </div>

        )
    }


    
} 

export default Tasklist