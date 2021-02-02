
import Cardlist from '../components/Cardlist';
import Editbar from '../components/Editbar'
import tasks from '../components/tasks'
import './App.css';

function App() {

  const deleteTask = (Card) => {
    
  }

  return (
    <div>
      <header><h3>TO DO LIST</h3></header>
      <Cardlist tasks={tasks} onDelete={deleteTask}/>
      <footer><a className="gh" href="github.com/cherfa11209" target="_blank">GITHUB</a></footer>
    </div>
  );
}

export default App;
