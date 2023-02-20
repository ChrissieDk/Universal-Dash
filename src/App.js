import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Billing from './Billing';
import TerminationRequest from './terminationRequest';
import SimSwop from './simSwop';
import Login from './Login';
import Register from './Register';

const App = () => {
 

  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-white object-cover flex items-center border-b-4">
       <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Billing" element={<Billing />} />
          <Route exact path="/TerminationRequest" element={<TerminationRequest />} />
          <Route exact path="/SimSwop" element={<SimSwop />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;