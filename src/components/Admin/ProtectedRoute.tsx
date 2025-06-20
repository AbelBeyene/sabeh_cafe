import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem('isAdmin') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/manage" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 