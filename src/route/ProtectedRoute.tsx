import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const getLocalStorage = localStorage.getItem('token');
  return !!getLocalStorage ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
