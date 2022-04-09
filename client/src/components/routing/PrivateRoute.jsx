import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("authToken")) {
    return <Navigate to="landing-page" replace />
  }
  return children ? children : <Outlet />;
}