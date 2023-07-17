import Login from './pages/Login'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
function App() {
  return (
   <BrowserRouter >
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/dashboard" element={ <Dashboard />} />
      </Routes>
   
   </BrowserRouter>
  )
}

export default App
