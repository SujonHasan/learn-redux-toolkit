import './App.css';
import AddTodo from "./components/AddTodo";
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
