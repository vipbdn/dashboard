
import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
