import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading, myuser } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <progress className="progress w-56"></progress>
  }
  if (user.email || myuser.email) {
    return children;
  }
  if (!user.email || myuser.email) {
    return <Navigate to="/login" from={{ state: location }} replace={true} />;
  }


};

export default PrivateRoute;