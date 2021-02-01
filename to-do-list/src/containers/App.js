
import Cardlist from '../components/Cardlist';
import Editbar from '../components/Editbar'
import './App.css';

function App() {
  return (
    <div>
      <header> To - Do - List </header>
      <Editbar />
      <Cardlist />
      <footer><a href="github.com/cherfa11209" target="_blank">My github!</a></footer>
    </div>
  );
}

export default App;
