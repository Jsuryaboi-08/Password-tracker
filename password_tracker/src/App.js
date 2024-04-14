import logo from './logo.svg';
import './App.css';
import MainBar from './components/MainBar';
import SideBar from './components/SideBar';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <MainBar></MainBar>
      <Layout></Layout>
    </div>
  );
}

export default App;
