import './App.css';
import SideBar from './components/SideBar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <SideBar />
    </Router>
  );
}

export default App;
