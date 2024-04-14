import logo from './logo.svg';
import './App.css';
import MainBar from './components/MainBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <MainBar ></MainBar>
    </div>
  );
}

export default App;
