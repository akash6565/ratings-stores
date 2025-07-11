import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={
            <PrivateRoute roles={['admin']}><AdminDashboard /></PrivateRoute>
          } />
          <Route path="/user" element={
            <PrivateRoute roles={['user']}><UserDashboard /></PrivateRoute>
          } />
          <Route path="/store-owner" element={
            <PrivateRoute roles={['store_owner']}><StoreOwnerDashboard /></PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
