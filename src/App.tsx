import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Dashboard, ProfitReport, UsersReport, Calendar } from './pages';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/usersreport" element={<UsersReport/>}/>
          <Route path="/profitreport" element={<ProfitReport/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
