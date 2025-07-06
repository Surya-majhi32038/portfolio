import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import AdminLogin from './pages/Admin/AdminLogin.jsx';
import HomePortfolio from './pages/HomePortfolio.jsx';
import ProtectedRoute from './componentes/ProtectedRoute.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // last 10:19
export default function App() {
  return (
    <BrowserRouter>
        <Routes> 
           <Route path="/home/:id" element={<HomePortfolio />} />
           <Route path="/admin" element={<ProtectedRoute element={ <AdminDashboard/>}/>}/>
           <Route path='/' element={<AdminLogin />} />
           <Route path='/login' element={<AdminLogin />} />
        </Routes>
    </BrowserRouter>
);
}