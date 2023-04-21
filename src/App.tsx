import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LineChart from './pages/LineChart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lineChart" element={<LineChart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
