import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Dashboard, EarningReport, UsersReport } from './pages';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/usersreport" element={<UsersReport/>}/>
          <Route path="/earningreport" element={<EarningReport/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
