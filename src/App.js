import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes as Switches, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switches>
          <Route path='home' component={<Home />} />
        </Switches>
      </div>
    </Router>
  );
}

export default App;
