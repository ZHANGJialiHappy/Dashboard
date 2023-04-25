import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Dashboard, UsersReport } from './pages';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/usersreport" element={<UsersReport/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
