import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import AdminLogin from './pages/Admin/AdminLogin.jsx';
import Home from './pages/Home.jsx';
import ProtectedRoute from './componentes/ProtectedRoute.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // last 10:19
export default function App() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<ProtectedRoute element={ <AdminDashboard/>}/>}/>
            <Route path='/login' element={<AdminLogin/>}/>
        </Routes>
    </BrowserRouter>
);
}