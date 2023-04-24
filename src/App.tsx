import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Linechart from './pages/Line';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/linechart" element={<Linechart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
