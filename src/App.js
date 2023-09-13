// import logo from './logo.svg';
import './App.css';
import Tacoheader from './Components/header';
import MainPage from './Components/Main';
import Todo from './Components/Todo';
import Doing from './Components/Doing';
import Done from './Components/Done'
function App() {
  return (
    <div className="App" >
      <Tacoheader/>
      <div style={{display:'flex'}}>
      <MainPage/>
      <Todo/>
      <Doing/>
      <Done/>
      </div>
    </div>
  );
}

export default App;
