import Login from './pages/Login'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import ProtectedRoute from './components/Protected/ProtectedRoute';
import Home from './pages/Home';
function App() {
  return (
   <BrowserRouter >
      <Routes>
        <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={ <Signup />} />
      </Routes>
   
   </BrowserRouter>
  )
}

export default App
