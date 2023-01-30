import './App.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className='w-full h-screen bg-white object-cover flex items-center border-b-4'>
      <Sidebar />
      <Dashboard />

    </div>
  )
}
export default App;
