import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user || (roles && !roles.includes(user.role))) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
