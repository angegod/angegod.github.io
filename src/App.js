import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './component/Menu'
import TestComponent from './component/TestComponent';

function App() {
  return (
    <>
    <Router>
      <Menu/>      
    </Router>
      
    </>
  );
}

export default App;
